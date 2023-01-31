import React from "react";
import ButtonBorder from "./ButtonBorder";

const GridSquare = ({
  firstquadrant,
  secondquadrant,
  thirdquadrant,
  fourtquadrant,
}) => {
  return (
    <div className="grid md:grid-cols-2 place-items-stretch border border-mainText">
      <div
        className={`${
          firstquadrant.title.length > 1 ? "" : "hidden md:block"
        } w-full py-12 aspect-square bg-mainYellow grid place-items-center border border-mainText`}
      >
        {firstquadrant && (
          <div className="text-center px-4 md:mx-6">
            <h3 className="text-3xl md:text-4xl">{firstquadrant.title}</h3>
            <p className="mt-5">{firstquadrant.description}</p>
            {firstquadrant.textbutton.length > 1 && (
              <div className="mt-5">
                <ButtonBorder
                  text={firstquadrant.textbutton}
                  color="mainText"
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`${
          secondquadrant.title.length > 1 ? "" : "hidden md:block"
        } w-full py-12 aspect-square bg-white grid place-items-center border border-mainText`}
      >
        {secondquadrant && (
          <div className="text-center px-4 md:mx-6">
            <h3 className="text-3xl md:text-4xl">{secondquadrant.title}</h3>
            <p className="mt-5">{secondquadrant.description}</p>
            {secondquadrant.textbutton.length > 1 && (
              <div className="mt-5">
                <ButtonBorder
                  text={secondquadrant.textbutton}
                  color="mainText"
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`${
          thirdquadrant.title.length > 1 ? "" : "hidden md:block"
        } w-full py-12 aspect-square bg-white grid place-items-center border border-mainText`}
      >
        {thirdquadrant && (
          <div className="text-center px-4 md:mx-6">
            <h3 className="text-3xl md:text-4xl">{thirdquadrant.title}</h3>
            <p className="mt-5">{thirdquadrant.description}</p>
            {thirdquadrant.textbutton.length > 1 && (
              <div className="mt-5">
                <ButtonBorder
                  text={thirdquadrant.textbutton}
                  color="mainText"
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div
        className={`${fourtquadrant.title.length > 1 ? "" : "hidden md:block"}
      w-full py-12 aspect-square bg-mainBlue grid place-items-center border border-mainText`}
      >
        {fourtquadrant && (
          <div className="text-center px-4 md:mx-6">
            <h3 className="text-3xl md:text-4xl">{fourtquadrant.title}</h3>
            <p className="mt-5">{fourtquadrant.description}</p>
            {fourtquadrant.textbutton.length > 1 && (
              <div className="mt-5">
                <ButtonBorder
                  text={fourtquadrant.textbutton}
                  color="mainText"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GridSquare;
