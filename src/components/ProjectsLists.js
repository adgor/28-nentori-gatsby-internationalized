import React from "react";

export const ProjectsLists = ({ children }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-screen-lg sm:mx-auto">{children}</div>
    </div>
  );
};
