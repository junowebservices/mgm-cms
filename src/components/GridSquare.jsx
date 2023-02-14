import React from "react";

const GridSquare = ({}) => {
  return (
    <div className="widest mt-4" id="grid-square">
      <div className="lg:flex lg:flex-col inside lg:mt-12">
        <h2 className="text-2xl lg:text-5xl font-semibold pb-2 lg:pb-6">
          Latest Update
        </h2>
        <div className="relative grid md:grid-cols-2 text-center lg:place-items-center ">
          <div className="hidden md:block bg-mainOrange h-full aspect-[4/3] " />
          <div className="grid place-content-center border-2 border-mainTextColor bg-white aspect-[4/3]">
            <div className="w-[80%] mx-auto">
              <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainText line-clamp-1">
                Featured
              </h2>
              <p className="text-secondaryTextColor line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus laborum architecto esse facilis cupiditate ex?
                Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                explicabo similique molestiae incidunt non placeat? Eaque.
              </p>
            </div>
          </div>
          <div className="grid place-content-center border-2 border-mainTextColor bg-white aspect-[4/3]">
            <div className="w-[80%] mx-auto">
              <h2 className="text-2xl lg:text-4xl font-medium my-3 text-mainText line-clamp-1">
                Featured
              </h2>
              <p className="text-secondaryTextColor line-clamp-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus laborum architecto esse facilis cupiditate ex?
                Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                explicabo similique molestiae incidunt non placeat? Eaque.
              </p>
            </div>
          </div>
          <div className="hidden md:block bg-mainYellow h-full aspect-[4/3] " />
        </div>
      </div>
    </div>
  );
};

export default GridSquare;
