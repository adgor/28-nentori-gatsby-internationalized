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
      <div class=" px-5 pt-2 pb-24 mx-auto">
        <div class="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          {nodes.map((image, index) => {
            const { name } = image;
            return (
              <div class="p-2 mb-6 md:w-1/2 lg:w-1/3 sm:mb-0">
                <div class="h-64 overflow-hidden rounded-lg" key={index}>
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
