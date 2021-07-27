import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { HiMenu } from "react-icons/hi";
import { useIntl } from "react-intl";
import { LocalizedLink } from "gatsby-theme-i18n";
import "../../common.css";

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
      <div className="flex items-center flex-shrink-0 text-white">
        <LocalizedLink
          to="/"
          aria-label={intl.formatMessage({ id: "name" })}
          title={intl.formatMessage({ id: "name" })}
          className="inline-flex items-center mr-8"
        >
          <svg
            className="w-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 676 508.47"
          >
            <path
              d="M671.19 8.25A34.3 34.3 0 01648.8 0c-.58.47-1.18.94-1.76 1.43a236 236 0 01-148.17 52q-9 0-17.79-.65l-.74-.06c-3.59-.29-7.21-.41-10.86-.41a146.06 146.06 0 00-96.37 36.18A135.26 135.26 0 00363 98.28a146.68 146.68 0 00-24.69 35.33c-.09-.19-.2-.39-.31-.59-.11.2-.22.4-.31.59A143.94 143.94 0 00324 111.35a146.16 146.16 0 00-117.47-59c-3.65 0-7.27.12-10.86.41l-.74.06q-8.8.64-17.79.65A236 236 0 0129 1.43C28.38.94 27.78.47 27.2 0A34.3 34.3 0 014.81 8.25 32 32 0 010 7.91v313a9.51 9.51 0 00.63 3.38 146.76 146.76 0 00165.53 89.27l1-.24.29-.05a146.75 146.75 0 01144.35 53.09 146 146 0 0112.2 18.11v24h28v-24a146.31 146.31 0 01127.37-74.11 147.59 147.59 0 0129.16 2.9l.29.05 1 .24c2 .42 4 .78 6.07 1.1a147.73 147.73 0 0023.38 1.85 146 146 0 0042.64-6.32c2.47-.74 4.89-1.55 7.3-2.42a147 147 0 0086-83.15 11 11 0 00.76-4.06V7.91a32 32 0 01-4.78.34zM324 430.53a235.39 235.39 0 00-101.7-41.63 239.34 239.34 0 00-36.44-2.79q-8.88 0-17.57.65a.62.62 0 00-.19 0 2.33 2.33 0 00-.36 0c-1.39.09-2.77.19-4.16.36a1.06 1.06 0 00-.25 0H163c-3.39.24-6.81.37-10.25.37a146.24 146.24 0 01-122.33-66 8.92 8.92 0 01-1.47-5V39.06a235.35 235.35 0 00100.7 35.06 240.82 240.82 0 0025.61 1.38q8.91 0 17.65-.66c.81-.09 1.63-.14 2.46-.2q5.19-.37 10.48-.38c63.8 0 118.07 43.75 138.14 100.68zm323-114.39a10.78 10.78 0 01-1.76 5.93 146.13 146.13 0 01-122 65.51c-3.44 0-6.86-.13-10.25-.37h-.31a1.06 1.06 0 00-.25 0c-1.39-.17-2.77-.27-4.16-.36a2.33 2.33 0 00-.37 0 .52.52 0 00-.18 0q-8.69-.64-17.57-.65a239.34 239.34 0 00-36.44 2.79A235.42 235.42 0 00390 408.23q-7.71 3.61-15.1 7.73a239.82 239.82 0 00-22.9 14.57v-27.89a146.33 146.33 0 01123.51-67.75 141.79 141.79 0 0117.49 1.05c2.23.25 4.45.56 6.64.94h.26a240 240 0 0029.92 1.87c7.56 0 15.06-.36 22.44-1.07A235.41 235.41 0 00647 307.81zm0-46A235.74 235.74 0 01517 309a238.31 238.31 0 01-34.32-2.48c-.58-.07-1.17-.16-1.77-.25h-.15A146.34 146.34 0 00352 351.92V318a146.36 146.36 0 01123.51-67.75 143.78 143.78 0 0117.49 1.03c2.23.26 4.45.56 6.64.94a1.27 1.27 0 01.26 0 240 240 0 0029.92 1.86c7.56 0 15.06-.36 22.44-1.06A235.72 235.72 0 00647 223.16zm0-84.65a235.74 235.74 0 01-130 38.84 238.31 238.31 0 01-34.32-2.48c-.58-.07-1.17-.16-1.77-.25h-.15A146.26 146.26 0 00352 267.27v-36.44a146.33 146.33 0 01123.51-67.75 143.78 143.78 0 0117.47 1c2.23.25 4.45.56 6.64.94a1.27 1.27 0 01.26 0 240 240 0 0029.93 1.98c7.56 0 15.06-.36 22.44-1.07A235.41 235.41 0 00647 136zm0-87.15a235.74 235.74 0 01-130 38.86 238.31 238.31 0 01-34.32-2.48c-.58-.07-1.17-.16-1.77-.25h-.15a143.6 143.6 0 00-21.08-1.52A146.16 146.16 0 00352 180.11v-5.17A153.83 153.83 0 01386.83 119a150.77 150.77 0 0113.6-12.42c24.79-20 55.91-32.31 89.72-32.31q5.3 0 10.48.38c.83.06 1.65.11 2.46.2q8.75.66 17.65.66a240.82 240.82 0 0025.61-1.38A235.35 235.35 0 00647 39.06z"
              fill="#f9ed27"
              data-name="Layer 2"
            />
          </svg>

          <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
            {intl.formatMessage({ id: "name" })}
          </span>
        </LocalizedLink>
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
        <div className="flex flex-col items-baseline -ml-3 md:space-x-2 sm:flex-row lg:flex-grow">
          {navLinks.map((navLink) => (
            <LocalizedLink
              key={navLink.id}
              to={navLink.path}
              // activeStyle="bg-red-400"
              activeClassName="active"
              // className={`px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white  ${
              //   "!active" ? "bg-red-400" : "bg-biscay-100"
              // }`}
              className="px-3 py-2 text-base font-medium rounded-md text-paleSky-300 hover:bg-biscay-700 hover:text-white active:bg-biscay-400"
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
