import React from "react";
import { useLocalization, LocalizedLink } from "gatsby-theme-i18n";

export default function LanguageSwitcher() {
  const { locale, config } = useLocalization();

  // set original path
  let path = typeof window !== "undefined" ? window.location.pathname : "";
  config.forEach((item) => (path = path.replace(`${item.code}/`, "")));

  return (
    <div className="flex space-x-1 ">
      {config.map((lang) => (
        <LocalizedLink
          activeClassName="active"
          to={path}
          key={lang.code}
          language={lang.code}
          className="px-2 py-1 text-sm rounded-md hover:bg-biscay-700 hover:text-white text-paleSky-300"
        >
          <span>{lang.code.toUpperCase()}</span>
        </LocalizedLink>
      ))}
    </div>
  );
}
