import React from "react";
import { useIntl } from "react-intl";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { LocalizedLink } from "gatsby-theme-i18n";

export default function ProjectsPagination({
  prevDisabled,
  prevPage,
  current,
  numPages,
  nextPage,
  nextDisabled,
}) {
  const intl = useIntl();
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-paleSky-200 ">
      <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <nav
            className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <LocalizedLink to={prevPage} className={prevDisabled}>
              <FaAngleLeft className="w-5 h-5" />
            </LocalizedLink>
            {/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-paleSky-300 text-paleSky-500 hover:bg-paleSky-50" */}
            <span
              aria-current="page"
              className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium border pointer-events-none text-paleSky-600 border-paleSky-300 bg-paleSky-50 "
            >
              {current} {intl.formatMessage({ id: "of" })} {numPages}
            </span>

            <LocalizedLink to={nextPage} className={nextDisabled}>
              <FaAngleRight className="w-5 h-5" />
            </LocalizedLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
