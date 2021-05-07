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

      {/* Hero Section */}
      <header className="relative h-90vh">
        <StaticImage
          src="../images/home.jpg"
          alt="eggs"
          className="h-full hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
        ></StaticImage>
        <div className="absolute top-0 w-full h-full bg-opacity-40 bg-biscay-900">
          <div className="flex flex-wrap pt-40">
            <div className="w-full px-6 md:w-8/12 lg:w-6/12 xl:w-5/12">
              <h1 className="text-3xl font-bold text-left text-white lg:text-5xl lg:leading-normal">
                Mirësevini në <br />
                SHMK 28 NËNTORI
              </h1>
              <p className="mt-4 mb-12 text-base text-left text-white sm:text-xl">
                Shkolla e mesme është ura lidhëse me plotësimin e prespektivave
                dhe arritjeve për një punë të mirë, një status të mirë dhe mbi
                të gjitha një individ të plortesuar social që i nevojitet
                shoqërisë.
              </p>
              <a
                className="items-center justify-center px-6 py-4 font-bold text-white transition duration-700 ease-in-out rounded-md bg-ceriseRed-500 hover:bg-ceriseRed-700"
                href="#misioni"
              >
                Lexo më shumë
              </a>
            </div>
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
