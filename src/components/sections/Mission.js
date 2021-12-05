import React from "react";
import { useIntl } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";
import FeaturedP from "./FeaturedP";
import DescP from "./DescP";

const Mission = () => {
  const intl = useIntl();
  return (
    <section
      id="mission"
      className="transition duration-700 dark:bg-paleSky-900 dark:text-white"
    >
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center py-10 mx-auto dark:text-white lg:flex-row">
          <div className="flex flex-col items-start text-left lg:flex-grow lg:w-1/2 lg:pr-20">
            <h2 className="mb-2 text-3xl font-bold text-biscay-500 dark:text-white">
              {intl.formatMessage({ id: "mission" })}
            </h2>
            <DescP text={intl.formatMessage({ id: "missionDesc" })} />

            <p className="my-3 text-base font-bold leading-relaxed lg:pr-10 text-biscay-500 dark:text-white">
              {intl.formatMessage({ id: "missionSubTitle" })}
            </p>
            <FeaturedP text={intl.formatMessage({ id: "missionFeature1" })} />
            <FeaturedP text={intl.formatMessage({ id: "missionFeature2" })} />
            <FeaturedP text={intl.formatMessage({ id: "missionFeature3" })} />
            <FeaturedP text={intl.formatMessage({ id: "missionFeature4" })} />

            <h2 className="mt-5 mb-2 text-3xl font-bold text-biscay-500 dark:text-white">
              {intl.formatMessage({ id: "vision" })}
            </h2>
            <DescP text={intl.formatMessage({ id: "visionDesc" })} />
          </div>
          <div className="lg:max-w-lg lg:w-full">
            <StaticImage
              src="../../images/mission.jpg"
              alt="28 nentori hall"
              className="rounded"
              placeholder="tracedSVG"
            ></StaticImage>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
