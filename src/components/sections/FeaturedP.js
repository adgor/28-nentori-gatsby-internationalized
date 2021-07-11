import React from "react";
import { HiCheck } from "react-icons/hi";

export default function FeaturedP(props) {
  return (
    <p className="flex items-center text-base font-normal leading-relaxed lg:pr-10 text-paleSky-500 dark:text-paleSky-200">
      <HiCheck className="w-6 h-6 mr-2 text-biscay-500 dark:text-white " />
      {props.text}
    </p>
  );
}
