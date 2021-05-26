import React from "react";
import { useIntl } from "react-intl";
import { StatsItem } from "./StatsItem";
import { GiDiploma } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { FaBuilding, FaUniversity } from "react-icons/fa";

export const Stats = () => {
  const intl = useIntl();

  return (
    <div className="px-4 py-16 mx-auto text-white bg-biscay-500 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl pb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-2 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
          {intl.formatMessage({ id: "ourPorpouse" })}
        </h2>
        <p className="text-base md:text-lg">
          {intl.formatMessage({ id: "ourPorpouseSubTitle" })}
        </p>
      </div>
      <div className="grid max-w-md gap-8 row-gap-10 sm:mx-auto lg:max-w-full lg:grid-cols-4">
        <StatsItem
          num={112}
          text={intl.formatMessage({ id: "certifiedProfessors" })}
          statIcon={<GiDiploma className="w-16 h-16 text-broom-500 " />}
        />
        <StatsItem
          num={1200}
          text={intl.formatMessage({ id: "regPup" })}
          statIcon={<FaBuilding className="w-16 h-16 text-broom-500 " />}
        />

        <StatsItem
          num={24}
          text={intl.formatMessage({ id: "parallellNum" })}
          statIcon={<BsPeopleFill className="w-16 h-16 text-broom-500 " />}
        />
        <StatsItem
          num={"97%"}
          text={intl.formatMessage({ id: "passToUny" })}
          statIcon={<FaUniversity className="w-16 h-16 text-broom-500 " />}
        />
      </div>
    </div>
  );
};
