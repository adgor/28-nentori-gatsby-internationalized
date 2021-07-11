import * as React from "react";
import { useIntl } from "react-intl";
import Layout from "../components/header/layout";
import Seo from "../components/seo";
import HeroPages from "../components/HeroPages";
import { StaticImage } from "gatsby-plugin-image";
import StaffTable from "../components/StaffTable";

const Staff = () => {
  const intl = useIntl();

  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "aboutUs" })} />

      {/* Hero Section */}
      <HeroPages
        heroImg={
          <StaticImage
            src="../images/staff-cabinet.jpg"
            alt="eggs"
            className="h-full "
            placeholder="tracedSVG"
            layout="fullWidth"
          ></StaticImage>
        }
        pageTitle={intl.formatMessage({ id: "staffTitle" })}
        pageSubTitle={intl.formatMessage({ id: "staffSubTitle" })}
      />

      <StaffTable />
    </Layout>
  );
};

export default Staff;
