import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MdxLink } from "gatsby-theme-i18n";
import Navbar from "./Navbar/Navbar";
import { Footer } from "./Footer";

const components = {
  a: MdxLink,
};

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <MDXProvider components={components}>{children}</MDXProvider>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
