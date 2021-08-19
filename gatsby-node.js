// embed local images in frontmatter
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    type MdxFrontmatter {
      embeddedImagesLocal: [File] @fileByRelativePath
    }
  `);
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = require.resolve(`./src/templates/blog-template.js`);

  const result = await graphql(`
    {
      blog: allFile(
        filter: { sourceInstanceName: { eq: "blog" }, extension: { eq: "mdx" } }
      ) {
        nodes {
          childMdx {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(result.errors);
    return;
  }

  const blogPosts = result.data.blog.nodes;

  blogPosts.forEach(({ childMdx: node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });

  // ******
  // PAGINATION
  // ******

  // Blog list pagination
  const blogListTemplate = require.resolve(`./src/templates/blog-list.js`);

  // Create blog-list pages without extention different than locale
  const resultList = await graphql(`
    {
      blogList: allMdx(filter: { fields: { locale: { ne: "en" } } }) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // Create blog-list pages
  const postsList = resultList.data.blogList.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(postsList.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/projects` : `/projects/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  // ******
  // END OF PAGINATION
  // ******
};
