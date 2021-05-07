import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

export default function FeaturedP(props) {
  return (
    <p
      className={`flex items-center text-base font-normal leading-relaxed lg:pr-10 text-ceriseRed-600 dark:text-paleSky-200`}
    >
      <CheckIcon className="w-6 h-6 text-biscay-500 dark:text-white " />
      <span className="pl-2 text-paleSky-500 dark:text-paleSky-200"></span>
      {props.text}
    </p>
  );
}
