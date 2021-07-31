import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

// const query = graphql`
//   {
//     allMdx {
//       nodes {
//         frontmatter {
//           images {
//             childImageSharp {
//               gatsbyImageData(
//                 layout: FIXED
//                 placeholder: DOMINANT_COLOR
//                 width: 10
//               )
//             }
//             name
//           }
//         }
//       }
//     }
//   }
// `;

const GaleryMdx = () => {
  // const data = useStaticQuery(query);
  // const nodes = data.allMdx.nodes;
  // console.log(nodes);
  return (
    <section>
      <div className="px-5 pt-2 pb-24 mx-auto ">
        <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          {/* {nodes.map((image, index) => {
            const { name } = frontmatter.image;
            return (
              <div key={index} className="p-2 mb-6 md:w-1/2 lg:w-1/3 sm:mb-0">
                <div className="h-64 overflow-hidden rounded-lg">

                <GatsbyImage alt="green doggo" image={getImage(props.localImages[0])} />
                  <GatsbyImage
                    image={image.childImageSharp.gatsbyImageData}
                    alt={name}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </section>
  );
};

export default GaleryMdx;
