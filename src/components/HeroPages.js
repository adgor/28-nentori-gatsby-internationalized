import React from "react";
import { useIntl } from "react-intl";

const HeroPages = ({ heroImg, pageTitle, pageSubTitle }) => {
  const intl = useIntl();
  return (
    <header className="relative h-56vh ">
      {heroImg}

      <div className="absolute top-0 w-full h-full bg-opacity-50 bg-mirage-900">
        <div className="flex flex-wrap pt-16">
          <div className="w-full px-6 md:w-8/12 lg:w-6/12 xl:w-5/12">
            <h1 className="text-4xl font-bold text-left text-white lg:text-5xl lg:leading-normal">
              {pageTitle}
            </h1>
            <p className="mt-4 mb-12 text-base text-left text-white sm:text-xl">
              {pageSubTitle}
            </p>
            <a
              className="items-center justify-center px-6 py-4 font-bold text-white transition duration-700 ease-in-out rounded-md bg-ceriseRed-500 hover:bg-ceriseRed-700"
              href="#missioni"
            >
              {intl.formatMessage({ id: "learnMore" })}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroPages;
