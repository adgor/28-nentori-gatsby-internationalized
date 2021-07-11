import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/header/layout";
import Seo from "../components/seo";

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />
      <main className="max-w-3xl px-4 py-10 mx-auto sm:px-6 sm:py-12 lg:max-w-4xl lg:py-16 lg:px-8 xl:max-w-6xl">
        <div className="space-y-10 sm:space-y-12 lg:space-y-20 xl:space-y-24">
          <div className="mx-auto prose max-w-none lg:prose-lg ">
            {data.mdx ? (
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
  query($locale: String!, $slug: String!) {
    mdx(
      fields: { locale: { eq: $locale } }
      frontmatter: { slug: { eq: $slug } }
    ) {
      frontmatter {
        slug
        title
      }
      body
    }
  }
`;
