import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col border-2 border-black text-center">
      <div className="bg-mainBlue w-full h-[200px]" />
      <div className="my-6 mx-8">
        <h3 className="text-3xl">Featured</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
    </div>
  );
};

export default Card;
