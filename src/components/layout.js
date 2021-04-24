import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useTranslation } from "react-i18next";
import { MdxLink, LocalizedLink } from "gatsby-theme-i18n";
import LanguageSwitcher from "./Navbar/LanguageSwitcher";
import ThemeSwitcher from "./Navbar/ThemeSwitcher";
import Navbar from "./Navbar/navbar";

const components = {
  a: MdxLink,
};

const Layout = ({ children }) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Navbar />
      <header className="container flex flex-row justify-between ">
        <LocalizedLink to="/">{t("home")}</LocalizedLink>
        <div className="flex items-center">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </header>
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
    </React.Fragment>
  );
};

export default Layout;
