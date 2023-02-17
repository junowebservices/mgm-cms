import React from "react";
import ButtonMgm from "./ButtonMgm";

const GridSquare2 = () => {
  return (
    <div className="-mt-56 widest" id="grid">
      <div className="lg:flex lg:flex-col inside">
        <div className="relative grid md:grid-cols-2 py-6 lg:pb-6 lg:pt-0 text-center lg:place-items-center ">
          <div className="hidden md:block bg-mainYellow h-full aspect-[4/3] " />
          <div className="grid place-content-center text-center border-2 border-mainTextColor aspect-[4/3] bg-white">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-5xl font-medium my-3 text-mainTextColor line-clamp-1">
                  Embracing Uncertainty
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
              <div>
                <ButtonMgm text="Explore" />
              </div>
            </div>
          </div>
          <div className="grid place-content-center border-2 border-mainTextColor bg-white aspect-[4/3]">
            <div className="w-[90%] mx-auto space-y-4">
              <div>
                <h2 className="text-2xl lg:text-5xl font-medium my-3 text-mainTextColor line-clamp-1">
                  Events & Activies
                </h2>
                <p className="text-secondaryTextColor line-clamp-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus laborum architecto esse facilis cupiditate ex?
                  Voluptatum et quod at, dolorum cumque inventore, perspiciatis
                  explicabo similique molestiae incidunt non placeat? Eaque.
                </p>
              </div>
              <div>
                <ButtonMgm text="See more" />
              </div>
            </div>
          </div>
          <div className="hidden md:block bg-mainBlue h-full aspect-[4/3] " />
        </div>
      </div>
    </div>
  );
};

export default GridSquare2;
