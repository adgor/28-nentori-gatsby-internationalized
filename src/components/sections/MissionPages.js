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
      {/* <div className="flex flex-col items-center px-6 py-10 mx-auto dark:text-white lg:flex-row"> */}
      <div className="flex flex-col items-center px-6 py-10 mx-auto dark:text-white lg:flex-row">
        <div className="flex flex-col items-start text-left lg:flex-grow lg:w-1/2 ">
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

      <div class=" flex flex-col items-center px-5 pb-10 mx-auto lg:flex-row">
        <div class="flex flex-col items-start text-left lg:flex-grow lg:w-1/2 lg:pl-14 ">
          <h2 class="mb-2 text-3xl font-bold text-biscay-500">
            {sectionTitle2}
          </h2>
          <DescP text={sectionDescKushtet} />
        </div>
        <div class="order-last mt-6 lg:mt-0 lg:max-w-lg lg:order-first lg:w-full">
          {sectionImg2}
        </div>
      </div>

      {/* </div> */}
    </section>
  );
};

export default MissionPages;
