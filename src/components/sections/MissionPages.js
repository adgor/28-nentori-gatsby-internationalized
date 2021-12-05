import React from "react";
import DescP from "./DescP";

const MissionPages = ({
  sectionImg,
  sectionImg2,
  sectionTitle,
  sectionDesc1,
  sectionDesc2,
  sectionDesc3,
  sectionTitle2,
  sectionDescKushtet,
}) => {
  return (
    <section
      id="mission"
      className="transition duration-700 dark:bg-paleSky-900 dark:text-white"
    >
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="flex flex-col items-center py-10 mx-auto dark:text-white lg:flex-row ">
          <div className="flex flex-col items-start pr-6 text-left lg:flex-grow lg:w-1/2 ">
            <h2 className="mb-2 text-3xl font-bold text-biscay-500 dark:text-white">
              {sectionTitle}
            </h2>
            <div className="space-y-3 ">
              <DescP text={sectionDesc1} />
              <DescP text={sectionDesc2} />
              <DescP text={sectionDesc3} />
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:max-w-lg lg:w-full">{sectionImg}</div>
        </div>

        <div className="flex flex-col items-center pb-10 mx-auto lg:flex-row">
          <div className="flex flex-col items-start text-left lg:flex-grow lg:w-1/2 lg:pl-14 ">
            <h2 className="mb-2 text-3xl font-bold text-biscay-500">
              {sectionTitle2}
            </h2>
            <DescP text={sectionDescKushtet} />
          </div>
          <div className="order-last mt-6 lg:mt-0 lg:max-w-lg lg:order-first lg:w-full">
            {sectionImg2}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPages;
