import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const Card = ({ image, heading, desc }) => {
  return (
    <div className="flex flex-col border-2 border-black text-center">
      {/* <GatsbyImage image={heroImage} alt="sample" /> */}
      <div className="bg-mainBlue w-full h-[200px]" />
      <div className="my-6 mx-8">
        <h3 className="text-3xl">{heading}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
