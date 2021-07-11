import React from "react";
import { useIntl } from "react-intl";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  {
    twitter: "#",
    facebook: "#",
    instagram: "#",
  },
];

export const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
  }
  const intl = useIntl();

  return (
    <div className=" bg-paleSky-50">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              {/* <svg
              className="w-8 text-biscay-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg> */}
              <span className="ml-2 text-xl font-bold tracking-wide uppercase text-biscay-500">
                Logo TODO
              </span>
            </a>
            <div className="mt-2 text-xl text-biscay-500 lg:max-w-sm">
              <p>{intl.formatMessage({ id: "motoTitle" })}</p>
              <p className="font-black ">
                {intl.formatMessage({ id: "moto" })}
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
              {intl.formatMessage({ id: "contact" })}
            </p>

            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="flex items-center transition-colors duration-300 text-biscay-400 hover:text-biscay-800"
            >
              <FaPhone className="mr-1 text-biscay-500" />
              +389 (0) 46-831-625
            </a>

            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="flex items-center transition-colors duration-300 text-biscay-400 hover:text-biscay-800"
            >
              <FaEnvelope className="mr-1 text-biscay-500 " />
              csno_zdravkocockovski@yahoo.com
            </a>

            <a
              href="https://www.google.com/maps/search/gjimnazi+28+nentori+diber/@41.5162912,20.5276099,17z/data=!3m1!4b1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="flex items-center transition-colors duration-300 text-biscay-400 hover:text-biscay-800"
            >
              <FaMapMarkerAlt className="mr-1 text-biscay-500 " />
              Shkolla e Mesme 28 Nëntori
            </a>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>

            {socialLinks.map((socialLink, index) => (
              <div key={index} className="flex items-center mt-1 space-x-3">
                <a
                  href={socialLink.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
                >
                  <FaTwitter className="w-6 h-6 " />
                </a>
                <a
                  href={socialLink.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                >
                  <FaFacebook className="w-6 h-6 " />
                </a>
                <a
                  href={socialLink.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 transition-colors duration-300 hover:text-ceriseRed-500 "
                >
                  <FaInstagram className="w-6 h-6 " />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright {getYear()} SHMK - 28 Nëntori Dibër, All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
