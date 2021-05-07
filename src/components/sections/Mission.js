import React from "react";
import { useIntl } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";
import FeaturedP from "./styles/FeaturedP";
import DescP from "./styles/DescP";

const Mission = () => {
  const intl = useIntl();
  return (
    <section
      id="mission"
      className="transition duration-700 dark:bg-paleSky-900 dark:text-white"
    >
      <div className="flex flex-col items-center px-6 py-10 mx-auto dark:text-white lg:flex-row">
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

          <blockquote className="py-8 mt-0 text-lg font-semibold leading-8 sm:mt-8 rounded-t-xl md:p-2 md:text-xl md:leading-8 text-biscay-500 dark:text-white">
            <svg
              width="45"
              height="36"
              className="mb-1 fill-current text-biscay-200 dark:text-paleSky-400 "
            >
              <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
            </svg>
            <p className="text-xl font-black">
              {intl.formatMessage({ id: "moto" })}
            </p>
          </blockquote>
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
    </section>
  );
};

export default Mission;
