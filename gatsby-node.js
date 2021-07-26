exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = require.resolve(`./src/templates/blog-template.js`);
  const blogListTemplate = require.resolve(`./src/templates/blog-list.js`);

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

  // Create blog-list pages
  const posts = result.data.blog.nodes;
  const postsPerPage = 6;
  const numPages = Math.ceil(posts.length / postsPerPage);
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
};
