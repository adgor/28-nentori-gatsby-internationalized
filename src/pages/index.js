import * as React from "react";
import { graphql } from "gatsby";
import { LocalizedLink, LocalesList } from "gatsby-theme-i18n";
import { useIntl } from "react-intl";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Index = ({ data }) => {
  const intl = useIntl();
  return (
    <Layout>
      <Seo title={intl.formatMessage({ id: "home" })} />
      <header className="hero">
        <StaticImage
          src="../images/home.jpg"
          alt="28 nentori"
          className="hero-img"
          placeholder="tracedSVG"
          // layout="fullWidth"
        ></StaticImage>
        <div className="hero-container">
          <div className="hero-text">
            <h1>simply recipes</h1>
            <h4>no fluff, just recipes</h4>
          </div>
        </div>
      </header>
      <div className="p-6 text-white bg-biscay-500 dark:bg-biscay-900">
        <h1 className="">{intl.formatMessage({ id: "helloWorld" })}</h1>
        <p>{intl.formatMessage({ id: "indexNote" })}</p>
      </div>
      <p>
        <LocalizedLink to="/page-2/">
          {intl.formatMessage({ id: "secondPageLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-3/">
          {intl.formatMessage({ id: "thirdPageLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/page-2/" language="de">
          {intl.formatMessage({ id: "secondPageGermanLink" })}
        </LocalizedLink>
      </p>
      <p>
        <LocalizedLink to="/" language="en">
          {intl.formatMessage({ id: "indexPageEnglishLink" })}
        </LocalizedLink>
      </p>
      <ul>
        {data.allFile.nodes.map(({ childMdx: node }) => (
          <li key={node.frontmatter.slug}>
            <LocalizedLink to={node.frontmatter.slug}>
              {node.frontmatter.title}
            </LocalizedLink>
          </li>
        ))}
      </ul>
      <h2>{intl.formatMessage({ id: "overviewLang" })}</h2>
      <LocalesList />
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query($locale: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        childMdx: { fields: { locale: { eq: $locale } } }
      }
    ) {
      nodes {
        childMdx {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`;
