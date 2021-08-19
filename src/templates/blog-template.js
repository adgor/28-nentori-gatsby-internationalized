import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/header/layout";
import Seo from "../components/seo";

import { getImage, GatsbyImage } from "gatsby-plugin-image";

const BlogTemplate = ({ data }) => {
  const localImages = data.mdx.frontmatter.embeddedImagesLocal;
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <main className="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <div className="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
          <div className="mx-auto prose max-w-none lg:prose-lg ">
            {data.mdx ? (
              <>
                <MDXRenderer
                // localImages={data.mdx.frontmatter.embeddedImagesLocal}
                >
                  {data.mdx.body}
                </MDXRenderer>
                <section>
                  <div className="pt-2 pb-24 mx-auto ">
                    <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
                      {localImages
                        ? localImages.map((image, index) => {
                            return (
                              <div
                                key={index}
                                className="p-2 mb-6 md:w-1/2 lg:w-1/3 sm:mb-0"
                              >
                                <div className="h-64 overflow-hidden rounded-lg">
                                  <GatsbyImage
                                    image={getImage(image)}
                                    // alt={name}
                                    className="object-none w-full h-full "
                                  />
                                </div>
                              </div>
                            );
                          })
                        : ""}
                    </div>
                  </div>
                </section>
              </>
            ) : (
              <div>This page hasn't been translated yet</div>
            )}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
  query($locale: String!, $slug: String!, $id: String) {
    mdx(
      id: { eq: $id }
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
      }
      body
    }
  }
`;
