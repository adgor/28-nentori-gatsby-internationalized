import React from "react";
import { useIntl } from "react-intl";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

/* This example requires Tailwind CSS v2.0+ */
let personData = [
  {
    name: "Filan Fisteku",
    title: "Profesor i sh. natyrore",
    email: "example@gmail.com",
    facebook: "https://www.facebook.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i matematikes",

    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i biologjise",
    email: "example@gmail.com",
    facebook: "https://www.facebook.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i ed. fizike",

    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i gj. angleze",
    email: "example@gmail.com",
  },
  {
    name: "Filan Fisteku",
    title: "Profesor i kimis",
    email: "example@gmail.com",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
];

export default function StaffTitle() {
  const intl = useIntl();
  return (
    <section id="missioni">
      <div class="container px-5 py-20 mx-auto">
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div class="overflow-hidden border-b shadow border-paleSky-300 sm:rounded-lg">
                <table class="min-w-full divide-y divide-paleSky-300">
                  <thead class="bg-paleSky-100">
                    <tr>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold tracking-wider text-left uppercase text-paleSky-600"
                      >
                        {intl.formatMessage({ id: "fullName" })}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold tracking-wider text-left uppercase text-paleSky-600"
                      >
                        {intl.formatMessage({ id: "position" })}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold tracking-wider text-left uppercase text-paleSky-600"
                      >
                        {intl.formatMessage({ id: "email" })}
                      </th>
                      <th
                        scope="col"
                        class="px-6 py-3 text-xs font-bold tracking-wider text-left uppercase text-paleSky-600"
                      >
                        {intl.formatMessage({ id: "socialMedia" })}
                      </th>
                    </tr>
                  </thead>
                  <tbody
                    id="tableData"
                    class="bg-white divide-y divide-paleSky-300"
                  >
                    {personData.map((person) => (
                      <tr key={person.email} class="hover:bg-paleSky-50">
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-10 h-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                                alt=""
                              />
                            </div>
                            <div class="ml-4">
                              <div class="text-sm font-medium text-paleSky-900">
                                {person.name}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap">
                          <span class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full text-biscay-500 bg-biscay-100">
                            {person.title}
                          </span>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                          <div class="text-sm text-paleSky-900">
                            {person.email ? `${person.email}` : ""}
                          </div>
                        </td>

                        <td class="flex flex-row space-x-3 items-center px-6 py-6 text-sm font-medium text-right whitespace-nowrap">
                          {person.facebook ? (
                            <a
                              href={person.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 transition-colors duration-300 hover:text-blue-600"
                            >
                              <FaFacebook className="w-6 h-6 " />
                            </a>
                          ) : (
                            ""
                          )}
                          {person.twitter ? (
                            <a
                              href={person.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 transition-colors duration-300 hover:text-blue-500"
                            >
                              <FaTwitter className="w-6 h-6 " />
                            </a>
                          ) : (
                            ""
                          )}
                          {person.instagram ? (
                            <a
                              href={person.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 transition-colors duration-300 hover:text-ceriseRed-500"
                            >
                              <FaInstagram className="w-6 h-6 " />
                            </a>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
