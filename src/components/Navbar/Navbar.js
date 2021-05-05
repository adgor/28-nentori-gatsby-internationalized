import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";
import { MenuIcon } from "@heroicons/react/solid";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);
  const intl = useIntl();
  return (
    <nav className="flex flex-wrap items-center justify-between p-6 bg-biscay-500">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">Logo TODO</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="inline-flex items-center justify-center p-2 rounded-md text-biscay-400 bg-biscay-800 hover:text-white hover:bg-biscay-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-biscay-800 focus:ring-white"
        >
          <MenuIcon className="block w-6 h-6 text-white" />
        </button>
      </div>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex items-baseline ml-10 space-x-2 lg:flex-grow">
          <LocalizedLink
            to="/"
            className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white"
          >
            {intl.formatMessage({ id: "home" })}
          </LocalizedLink>
          <LocalizedLink
            to="/about"
            className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white"
          >
            {intl.formatMessage({ id: "aboutUs" })}
          </LocalizedLink>
          <LocalizedLink
            to="/projects"
            className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white"
          >
            {intl.formatMessage({ id: "projects" })}
          </LocalizedLink>
          <LocalizedLink
            to="/staff"
            className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white"
          >
            {intl.formatMessage({ id: "teachingStaff" })}
          </LocalizedLink>
          <LocalizedLink
            to="/program"
            className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white"
          >
            {intl.formatMessage({ id: "program" })}
          </LocalizedLink>
          <LocalizedLink
            to="/contact"
            className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white"
          >
            {intl.formatMessage({ id: "contact" })}
          </LocalizedLink>
        </div>
        <div className="flex items-center mt-6 lg:mt-0">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Header;
