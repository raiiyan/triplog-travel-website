import React from "react";

type Props = {
  heading: string;
  description: string;
};

const SectionHeading = ({ heading, description }: Props) => {
  return (
    <div className="w-[80%] mx-auto text-center">
      <h1 className="text-xl sm:text-3x1 ☐ text-blue-950 font-bold">
        {heading}
      </h1>
      <p className="mt-2 Otext-gray-700 sm:text-xs text-xs ">{description}</p>
    </div>
  );
};

export default SectionHeading;
