import React from "react";

export const StatsItem = ({ num, text, statIcon }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:mr-4">
        <div>{statIcon}</div>
      </div>
      <div>
        <h6 className="mt-2 mb-2 text-4xl font-bold leading-5">{num}</h6>
        <p className="mb-3 text-base ">{text}</p>
      </div>
    </div>
  );
};
