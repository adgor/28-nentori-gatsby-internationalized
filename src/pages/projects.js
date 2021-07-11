import * as React from "react";
import { graphql } from "gatsby";
import { useIntl } from "react-intl";
import Layout from "../components/header/layout";
import Seo from "../components/seo";
import HeroPages from "../components/HeroPages";
import { StaticImage } from "gatsby-plugin-image";
import { ProjectsLists } from "../components/ProjectsLists";
import ProjectsListItem from "../components/ProjectsListItem";

const Projects = ({ data }) => {
  const intl = useIntl();
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "projects" })} />

      <HeroPages
        heroImg={
          <StaticImage
            src="../images/projekte.jpg"
            alt="eggs"
            className="h-full "
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
        }
        pageTitle={intl.formatMessage({ id: "projectsTitle" })}
        pageSubTitle={intl.formatMessage({ id: "projectsSubTitle" })}
      />

      <ProjectsLists>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <ProjectsListItem
            // key={node.frontmatter.slug}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            year={node.frontmatter.year}
          />
        ))}
      </ProjectsLists>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query($locale: String!) {
    allFile(
      sort: { fields: childrenMdx___frontmatter___year, order: DESC }
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
            year
          }
        }
      }
    }
  }
`;
