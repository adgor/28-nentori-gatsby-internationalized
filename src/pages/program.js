import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/header/layout";
import Seo from "../components/seo";
import HeroPages from "../components/HeroPages";
import { StaticImage } from "gatsby-plugin-image";
import { HiArrowRight } from "react-icons/hi";
import PDF from "../../static/PROGRAMI-VJETOR-2020-2021.pdf";

const Program = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "program" })} />

      {/* Hero Section */}
      <HeroPages
        heroImg={
          <StaticImage
            src="../images/klasa.jpg"
            alt="eggs"
            className="h-full "
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
        }
        pageTitle={intl.formatMessage({ id: "programTitle" })}
        pageSubTitle={intl.formatMessage({ id: "programSubTitle" })}
      />

      <div
        id="missioni"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="mb-10 border-t border-b divide-y">
          <div className="grid py-8 sm:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                <p className=" text-ceriseRed-500" aria-label="Category">
                  {intl.formatMessage({ id: "program" })}
                </p>
                <p className="capitalize text-paleSky-600">
                  {intl.formatMessage({ id: "diber" })} 2020
                </p>
              </div>
            </div>
            <div className="sm:col-span-3 lg:col-span-2">
              <div className="mb-3">
                <p className="inline-block text-3xl font-extrabold leading-none transition-colors duration-200 text-biscay-500 hover:text-biscay-900 sm:text-4xl xl:text-4xl">
                  {intl.formatMessage({ id: "annualProgram" })}
                </p>
              </div>
              <p className="leading-relaxed text-paleSky-700">
                {intl.formatMessage({ id: "annualProgramDesc" })}
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            rel="noopener noreferrer"
            href={PDF}
            target="_blank"
            aria-label="Programi vjetor"
            className="inline-flex items-center font-semibold duration-700 ease-in-out ransition hover:text-ceriseRed-700 text-ceriseRed-500 md:mb-2 lg:mb-0"
          >
            {intl.formatMessage({ id: "learnMore" })}

            <HiArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Program;
