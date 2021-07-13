import React from "react";
import { useIntl } from "react-intl";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";

const icons = [FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt];

const nentoriKontacts = [
  {
    title: "+389 (0) 46-831-625",
    link: "tel:046-831-625",
  },
  {
    title: "csno_zdravkocockovski@yahoo.com",
    link: "mailto:csno_zdravkocockovski@yahoo.com",
  },
  {
    title: "shmk-28nentori.com",
    link: "http://shmk28nentori.com",
  },
  {
    title: "Shkolla e Mesme 28 Nëntori",
    link:
      "https://www.google.com/maps/search/gjimnazi+28+nentori+diber/@41.5162912,20.5276099,17z/data=!3m1!4b1",
  },
];

const usefulLinks = [
  {
    title: "mon",
    link: "https://www.mon.gov.mk",
  },
  {
    title: "munDebar",
    link: "https://dibra.gov.mk",
  },
];

export const ContactDetails = () => {
  const intl = useIntl();
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col justify-between lg:flex-row">
        <div>
          <h5 className="mb-6 text-3xl font-extrabold leading-none text-biscay-500">
            {intl.formatMessage({ id: "contactUs" })}
          </h5>

          <div className="grid gap-10 row-gap-5 sm:grid-cols-2">
            {nentoriKontacts.map((kontaktDet, index) => {
              const Icon = icons[index];

              return (
                <div className="max-w-md ">
                  <Icon className="w-8 h-8 mb-2 text-biscay-500" />
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={kontaktDet.link}
                    aria-label={kontaktDet.title}
                    title={kontaktDet.title}
                    className="flex items-center transition-colors duration-300 text-biscay-400 hover:text-biscay-800"
                  >
                    {kontaktDet.title}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" mt-14 lg:mt-0">
          <h5 className="mb-6 text-3xl font-extrabold leading-none text-biscay-500">
            {intl.formatMessage({ id: "usefulLinks" })}
          </h5>

          {usefulLinks.map((uLink, index) => (
            <a
              key={index}
              href={uLink.link}
              aria-label={intl.formatMessage({ id: uLink.title })}
              title={intl.formatMessage({ id: uLink.title })}
              className="flex items-center px-6 py-2 mb-2 transition-colors duration-300 border rounded shadow text-biscay-400 hover:border-biscay-400 hover:bg-biscay-400 hover:text-white"
            >
              {intl.formatMessage({ id: uLink.title })}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
