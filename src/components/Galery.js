import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "galery" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export const Galery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <section>
      <div className="px-4 py-5 pt-2 pb-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-2">
          {nodes.map((image, index) => {
            const { name } = image;
            return (
              <div key={index} className="p-2 mb-6 md:w-1/2 lg:w-1/3 sm:mb-0">
                <div className="h-64 overflow-hidden rounded-lg">
                  <GatsbyImage
                    image={image.childImageSharp.gatsbyImageData}
                    alt={name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
