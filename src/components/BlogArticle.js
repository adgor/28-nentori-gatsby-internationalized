import React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";
import { useIntl } from "react-intl";
import { HiArrowRight } from "react-icons/hi";
import { GatsbyImage } from "gatsby-plugin-image";

function BlogArticle({ slug, title, img, excerpt, alt, category, year }) {
  const intl = useIntl();

  return (
    <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
      <LocalizedLink to={slug} aria-label="Article">
        <GatsbyImage image={img} alt={alt} className="w-full h-64 rounded" />
      </LocalizedLink>
      <div className="py-5">
        <div className="flex flex-wrap">
          <div className="flex flex-col items-start ">
            <p className="inline-block mb-2 text-xs font-medium uppercase text-paleSky-600">
              {category}
            </p>
            <LocalizedLink
              to={slug}
              aria-label="Article"
              className="inline-block mb-3 transition-colors duration-200 text-biscay-500 hover:text-biscay-900"
            >
              <p className="text-2xl font-bold leading-7 ">{title}</p>
            </LocalizedLink>
            <p className="mb-3 leading-relaxed text-paleSky-700">{excerpt}</p>
            <div className="flex flex-wrap items-center w-full mt-auto ">
              <LocalizedLink
                to={slug}
                className="inline-flex items-center font-semibold duration-700 ease-in-out ransition hover:text-ceriseRed-700 text-ceriseRed-500 md:mb-2 lg:mb-0"
              >
                {intl.formatMessage({ id: "learnMore" })}

                <HiArrowRight className="w-4 h-4 ml-2" />
              </LocalizedLink>
              <span className="inline-flex items-center py-1 ml-auto text-sm font-semibold leading-none text-paleSky-600 lg:ml-auto md:ml-0">
                {year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogArticle;
