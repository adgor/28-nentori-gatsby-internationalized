import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/header/layout";
import Seo from "../components/seo";
import HeroPages from "../components/HeroPages";
import { StaticImage } from "gatsby-plugin-image";

const Contact = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "contact" })} />

      {/* Hero Section */}
      <HeroPages
        heroImg={
          <StaticImage
            src="../images/biblioteka.jpg"
            alt="eggs"
            className="h-full "
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
        }
        pageTitle={intl.formatMessage({ id: "contactTitle" })}
        pageSubTitle={intl.formatMessage({ id: "contactSubTitle" })}
      />
    </Layout>
  );
};

export default Contact;
