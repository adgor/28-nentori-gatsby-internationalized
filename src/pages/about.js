import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/header/layout";
import Seo from "../components/seo";
import HeroPages from "../components/HeroPages";
import { StaticImage } from "gatsby-plugin-image";
import MissionPages from "../components/sections/MissionPages";
import { Galery } from "../components/Galery";

const About = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "aboutUs" })} />

      {/* Hero Section */}
      <HeroPages
        heroImg={
          <StaticImage
            src="../images/about-unsplash.jpg"
            alt="eggs"
            className="h-full "
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
        }
        pageTitle={intl.formatMessage({ id: "aboutTitle" })}
        pageSubTitle={intl.formatMessage({ id: "aboutSubTitle" })}
      />

      {/* History */}
      <MissionPages
        sectionImg={
          <StaticImage
            src="../images/historia-unsplash.jpg"
            alt="28 nentori hall"
            className="rounded"
            placeholder="tracedSVG"
          ></StaticImage>
        }
        sectionTitle={intl.formatMessage({ id: "history" })}
        sectionDesc1={intl.formatMessage({ id: "historyDesc1" })}
        sectionDesc2={intl.formatMessage({ id: "historyDesc2" })}
        sectionDesc3={intl.formatMessage({ id: "historyDesc3" })}
        sectionImg2={
          <StaticImage
            src="../images/holli-kushtet.jpg"
            alt="28 nentori hall"
            className="object-cover object-center w-full rounded shadow h-96"
            placeholder="tracedSVG"
          ></StaticImage>
        }
        sectionTitle2={intl.formatMessage({ id: "workConditions" })}
        sectionDescKushtet={intl.formatMessage({ id: "workConditionsDesc" })}
      />

      <Galery />
    </Layout>
  );
};

export default About;
