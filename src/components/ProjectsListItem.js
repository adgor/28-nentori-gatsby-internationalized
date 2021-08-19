import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";
import { useIntl } from "react-intl";
import { HiArrowRight, HiMinusSm } from "react-icons/hi";

function ProjectsListItem({ title, slug, category, year, key, excerpt }) {
  const intl = useIntl();

  return (
    <div
      key={key}
      className="flex flex-col items-start justify-between py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-paleSky-50"
    >
      <div className="mb-4 lg:mb-0">
        <h5 className="text-xl font-bold leading-none sm:text-2xl">{title}</h5>

        <p className="inline-flex items-center mb-4 ml-auto text-sm font-semibold leading-none tracking-wide uppercase lg:ml-auto md:ml-0">
          <span className=" text-biscay-500">{category}</span>
          <HiMinusSm />
          <span className="text-paleSky-600">{year}</span>
        </p>

        <div className="relative pr-8">
          <p className="text-base text-paleSky-700 md:text-lg">{excerpt}</p>
        </div>
      </div>
      <div className="flex justify-start w-56 lg:justify-end">
        <LocalizedLink
          to={slug}
          className="inline-flex items-center font-semibold duration-700 ease-in-out ransition hover:text-ceriseRed-700 text-ceriseRed-500 md:mb-2 lg:mb-0"
        >
          {intl.formatMessage({ id: "learnMore" })}

          <HiArrowRight className="w-4 h-4 ml-2" />
        </LocalizedLink>
      </div>
    </div>
  );
}

export default ProjectsListItem;
