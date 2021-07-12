import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";
import { useIntl } from "react-intl";
import { HiArrowRight } from "react-icons/hi";

function ProjectsListItem({ title, slug, year, key }) {
  const intl = useIntl();

  return (
    <div
      key={key}
      className="flex flex-col items-start py-4 transition duration-300 transform rounded sm:px-4 lg:flex-row sm:hover:translate-x-4 sm:hover:bg-paleSky-50"
    >
      <div className="mb-4 lg:mb-0">
        <h5 className="text-xl font-bold leading-none sm:text-2xl">{title}</h5>
        <p className="inline-flex items-center mb-4 ml-auto text-sm font-semibold leading-none text-paleSky-600 lg:ml-auto md:ml-0">
          {year}
        </p>
        <div className="relative pr-8">
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae.
          </p>
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
