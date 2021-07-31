import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const GaleryMdxList = () => {
  const data = useStaticQuery(graphql`
    query($relDir: String) {
      allFile(
        filter: {
          sourceInstanceName: { eq: "blog" }
          extension: { ne: "mdx" }
          relativeDirectory: { eq: $relDir }
        }
      ) {
        totalCount
        nodes {
          name
          relativeDirectory
        }
      }
    }
  `);
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
};

export default GaleryMdxList;
