import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { HiMenu } from "react-icons/hi";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";

const navLinks = [
  {
    title: "home",
    path: "/",
    id: "1",
  },
  {
    title: "aboutUs",
    path: "/about",
    id: "2",
  },
  {
    title: "projects",
    path: "/projects",
    id: "3",
  },
  {
    title: "teachingStaff",
    path: "/staff",
    id: "4",
  },
  {
    title: "program",
    path: "/program",
    id: "5",
  },
  {
    title: "contact",
    path: "/contact",
    id: "6",
  },
];

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const intl = useIntl();
  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 bg-biscay-500">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <span className="text-xl font-semibold tracking-tight">Logo TODO</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="inline-flex items-center justify-center p-2 rounded-md text-biscay-400 bg-biscay-800 hover:text-white hover:bg-biscay-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-biscay-800 focus:ring-white"
        >
          <HiMenu className="block w-6 h-6 text-white" />
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col items-baseline -ml-3 md:space-x-2 md:ml-10 sm:flex-row lg:flex-grow">
          {navLinks.map((navLink) => (
            <LocalizedLink
              key={navLink.id}
              to={navLink.path}
              className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white"
            >
              {intl.formatMessage({ id: navLink.title })}
            </LocalizedLink>
          ))}
        </div>
        <div className="flex items-center pt-2 mt-4 border-t border-paleSky-700 lg:border-t-0 lg:pt-0 lg:mt-0">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Header;
