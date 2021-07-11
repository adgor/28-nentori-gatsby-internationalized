import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/header/layout";
import Seo from "../components/seo";

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo title={data.mdx.frontmatter.title} />

      <div className="prose">
        {data.mdx ? (
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        ) : (
          <div>This page hasn't been translated yet</div>
        )}
      </div>
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
