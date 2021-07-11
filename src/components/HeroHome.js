import React from "react";

import { useIntl } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";

const HeroHome = () => {
  const intl = useIntl();
  return (
    <header className="relative h-90vh">
      <StaticImage
        src="../images/home.jpg"
        alt="eggs"
        className="h-full hero-img"
        placeholder="tracedSVG"
        layout="fullWidth"
      ></StaticImage>
      <div className="absolute top-0 w-full h-full bg-opacity-40 bg-biscay-900">
        <div className="flex flex-wrap pt-40">
          <div className="w-full px-6 md:w-8/12 lg:w-6/12 xl:w-5/12">
            <h1 className="text-3xl font-bold text-left text-white lg:text-5xl lg:leading-normal">
              {intl.formatMessage({ id: "heroTitle1" })} <br />
              {intl.formatMessage({ id: "heroTitle2" })}
            </h1>
            <p className="mt-4 mb-12 text-base text-left text-white sm:text-xl">
              {intl.formatMessage({ id: "heroSubTitle" })}
            </p>
            <a
              className="items-center justify-center px-6 py-4 font-bold text-white transition duration-700 ease-in-out rounded-md bg-ceriseRed-500 hover:bg-ceriseRed-700"
              href="#mission"
            >
              {intl.formatMessage({ id: "learnMore" })}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHome;
