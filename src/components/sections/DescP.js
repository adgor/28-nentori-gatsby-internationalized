import React from "react";

export default function DescP({ text }) {
  return (
    <p className="text-base font-normal leading-relaxed text-paleSky-500 dark:text-paleSky-200">
      {text}
    </p>
  );
}
