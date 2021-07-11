import * as React from "react";
import { graphql } from "gatsby";
import { useIntl } from "react-intl";
import Layout from "../components/header/layout";
import HeroHome from "../components/HeroHome";
import Seo from "../components/seo";
import Mission from "../components/sections/Mission";
import { Stats } from "../components/Stats";
import Blog from "../components/Blog";
import BlogArticle from "../components/BlogArticle";
import { TeachingProcess } from "../components/TeachingProcess";

const Index = ({ data }) => {
  const intl = useIntl();
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "home" })} />

      {/* Hero Section */}
      <HeroHome />

      {/* Mision */}
      <Mission />

      {/* Stats */}
      <Stats />

      {/* Blog */}
      <Blog>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <BlogArticle
            key={node.frontmatter.slug}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            img={node.frontmatter.image.childImageSharp.gatsbyImageData}
            alt={node.frontmatter.image.name}
          />
        ))}
      </Blog>

      {/* Teaching Process */}
      <TeachingProcess />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query($locale: String!) {
    allFile(
      limit: 3
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
            image {
              name
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`;
