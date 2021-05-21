import React from "react";
import { useIntl } from "react-intl";
import { StatsItem } from "./StatsItem";
import { FaBeer } from "react-icons/fa";

export const Stats = ({ num, text, statIcon }) => {
  const intl = useIntl();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
         
           {intl.formatMessage({ id: "ourPorpouse" })}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-4">
        <StatsItem statIcon={<FaBeer className=' w-16 h-16 text-laRioja-500' />} num={112} text={"translate"} />
        </div>
    </div>
  );
};
