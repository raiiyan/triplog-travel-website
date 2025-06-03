import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  description: string;
};

const WhyChooseCard = ({ image, title, description }: Props) => {
  return (
    <div>
      {/*image */}
      <Image
        src={image}
        width={70}
        height={70}
        alt="image"
        className="mx-auto"
      />
      <h1 className="mt-6 text-center text-blue-700 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-gray-700 text-xs font-medium">
        {description}
      </p>
    </div>
  );
};

export default WhyChooseCard;
