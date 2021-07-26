import * as React from "react";
import { graphql } from "gatsby";
import { useIntl } from "react-intl";
import Layout from "../components/header/layout";
import Seo from "../components/seo";
import HeroPages from "../components/HeroPages";
import { StaticImage } from "gatsby-plugin-image";
import { ProjectsLists } from "../components/ProjectsLists";
import ProjectsListItem from "../components/ProjectsListItem";
import ProjectsPagination from "../components/ProjectsPagination";

const Projects = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPagePath =
    currentPage - 1 === 1
      ? "/projects/"
      : "/projects/" + (currentPage - 1).toString();
  const nextPagePath = "/projects/" + (currentPage + 1).toString();

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
            key={node.frontmatter.slug}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            year={node.frontmatter.year}
          />
        ))}
        <ProjectsPagination
          // firstPage={isFirst.toString()}
          prevDisabled={`relative inline-flex items-center px-2 py-2 text-sm font-medium bg-white border disabled:opacity-50 text-paleSky-500 border-paleSky-300 rounded-l-md hover:bg-paleSky-50 ${
            isFirst ? "opacity-50 pointer-events-none" : ""
          }`}
          prevPage={prevPagePath}
          current={currentPage.toString()}
          numPages={numPages.toString()}
          nextPage={nextPagePath}
          lastPage={numPages.toString()}
          nextDisabled={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-paleSky-300 bg-white text-sm font-medium text-paleSky-500 hover:bg-paleSky-50 ${
            isLast ? "opacity-50 pointer-events-none" : ""
          }`}
        />
      </ProjectsLists>
    </Layout>
  );
};

export default Projects;

export const query = graphql`
  query($locale: String!, $skip: Int!, $limit: Int!) {
    allFile(
      sort: { fields: childrenMdx___frontmatter___year, order: DESC }
      limit: $limit
      skip: $skip
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
