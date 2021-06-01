import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import "./teachingProcess.css";

export const TeachingProcess = () => {
  return (
    <div className="relative flex flex-col py-16 overflow-hidden bg-biscay-900 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
        <div className="relative z-10 lg:my-20 lg:max-w-2xl lg:w-full ">
          <div className=" sm:text-center lg:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-white ">
              <span className="block xl:inline">Procesi mësimor</span>
            </h2>
            <p className="mt-3 text-base text-biscay-300 sm:mt-5 sm:text-lg md:mt-5 ">
              Një histori e pasur dhe vullnet i mirë e i pa shteruar që nga viti
              1960 si shkolla e vetme e qytetit tonë dhe me një objekt modern,
              vazhdojme proceset e gjera mësimore në të gjita lëndët të
              përgaditura nga stafi i mësuesve tanë.
            </p>
          </div>
          <div className="relative mt-4 mr-4 overflow-hidden rounded h-28 max-w-7xl sm:px-6 lg:px-8 lg:pr-5 ">
            <div className="absolute space-y-1 ">
              <div className="flex space-x-1 scroller whitespace-nowrap text-biscay-300">
                <p className="px-3 py-1 rounded bg-biscay-600">Matematikë</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Informatikë</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Fizikë</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Biznes</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Ekonomi </p>
                <p className="px-3 py-1 rounded bg-biscay-600">
                  Fillet e së drejtës
                </p>
              </div>
              <div className="flex space-x-1 scroller whitespace-nowrap text-biscay-300">
                <p className="px-3 py-1 rounded bg-biscay-600">Gjuhë shqipe</p>
                <p className="px-3 py-1 rounded bg-biscay-600">
                  Gjuhë maqedonase
                </p>
                <p className="px-3 py-1 rounded bg-biscay-600">Gjuhë angleze</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Gjuhë frënge</p>
                <p className="px-3 py-1 rounded bg-biscay-600">
                  Gjuhë gjermane
                </p>
              </div>
              <div className="flex space-x-1 scroller whitespace-nowrap text-biscay-300">
                <p className="px-3 py-1 rounded bg-biscay-600">Biologji</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Kimi</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Gjeografi</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Histori</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Filozofi</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Art figurativ</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Art muzikor</p>
                <p className="px-3 py-1 rounded bg-biscay-600">Sport</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inset-y-0 right-0 hidden w-full max-w-xl lg:block lg:pr-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0 ">
        <StaticImage
          src="../images/procesi-mesimor.jpg"
          alt="28 nentori hall"
          className="h-full"
          placeholder="tracedSVG"
        ></StaticImage>
        <span className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-biscay-900 to to-transparent"></span>
      </div>
    </div>
  );
};
