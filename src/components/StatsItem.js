import React from "react";

export const StatsItem = ({ num, text, statIcon }) => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="sm:mr-4">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          {statIcon}
        </div>
      </div>
      <div>
        <h6 className="mb-2 text-4xl font-bold leading-5">{num}</h6>
        <p className="mb-3 text-base text-gray-900">{text}</p>
      </div>
    </div>
  );
};
