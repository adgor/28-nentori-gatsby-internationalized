import React from "react";
import { useIntl } from "react-intl";

const HeroPages = ({ heroImg, pageTitle, pageSubTitle }) => {
  const intl = useIntl();
  return (
    <header className="relative h-56vh ">
      {heroImg}

      <div className="absolute top-0 w-full h-full bg-opacity-75 bg-mirage-900">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-5/12">
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
      </div>
    </header>
  );
};

export default HeroPages;
