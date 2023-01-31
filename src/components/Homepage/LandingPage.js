import React from "react";
import Features from "../Features";
import BlogRoll from "../BlogRoll";
import FullWidthImage from "../FullWidthImage";
import LatestNews from "../LatestNews";
import SliderCarousell from "../SliderCarousell";
import Card from "../Card";
import ButtonContained from "../ButtonContained";
import EventTabs from "../EventTabs";
import Sample from "../Sample";
import Embracing from "../Embracing";
import CelebrateWithUs from "../CelebrateWithUs";
import ButtonBorder from "../ButtonBorder";
import { getImage } from "gatsby-plugin-image";
import PreviewCompatibleImage from "../PreviewCompatibleImage";
import GridSquare from "../GridSquare";

const LandingPage = ({
  title,
  image,
  grid,
  grid2,
  // firstquadrant,
  // secondquadrant,
  // thirdquadrant,
  // fourtquadrant,
  fullrow,
  fullrow2,
  // card,
}) => {
  // const cardImage = getImage(card.image1) || card.image1;
  console.log(image, "image");

  return (
    <div>
      {/* <SliderCarousell /> */}
      {/* <div className="h-[600px] overflow-hidden w-full grid">
        <PreviewCompatibleImage imageInfo={image} />
      </div> */}
      {grid && (
        <section className="inside my-8 px-4 md:px-0">
          <GridSquare
            firstquadrant={grid.firstquadrant}
            secondquadrant={grid.secondquadrant}
            thirdquadrant={grid.thirdquadrant}
            fourtquadrant={grid.fourtquadrant}
          />
          {/* <div className="grid md:grid-cols-2 place-items-center ">
            {grid.firstquadrant.title.length > 1 ? (
              <div className="w-full py-12 aspect-square bg-mainOrange grid place-items-center border-2 border-b-0 border-mainText">
                {grid.firstquadrant && (
                  <div className="text-center px-4 md:px-12">
                    <h3 className="text-4xl mb-4">
                      {grid.firstquadrant.title}
                    </h3>
                    <p className="mb-6">{grid.firstquadrant.description}</p>
                    {grid.firstquadrant.button && (
                      <ButtonBorder
                        text={grid.firstquadrant.textbutton}
                        color="mainText"
                      />
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-mainOrange w-full py-12 aspect-square border-2 border-b-0 border-mainText hidden md:block" />
            )}

            <div className="w-full py-12 aspect-square bg-white grid place-items-center border-2 md:border-l-0 border-b-0 border-mainText">
              {grid.secondquadrant && (
                <div className="text-center px-4 md:px-12">
                  <h3 className="text-4xl mb-4">{grid.secondquadrant.title}</h3>
                  <p className="mb-6">{grid.secondquadrant.description}</p>
                  {grid.secondquadrant.button && (
                    <ButtonBorder
                      text={grid.secondquadrant.textbutton}
                      color="mainText"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="w-full py-12 aspect-square bg-white grid place-items-center border-2 border-mainText">
              {grid.thirdquadrant && (
                <div className="text-center px-4 md:px-12">
                  <h3 className="text-4xl mb-4">{grid.thirdquadrant.title}</h3>
                  <p className="mb-6">{grid.thirdquadrant.description}</p>
                  {grid.thirdquadrant.button && (
                    <ButtonBorder
                      text={grid.thirdquadrant.textbutton}
                      color="mainText"
                    />
                  )}
                </div>
              )}
            </div>
            {grid.fourtquadrant.title.length > 1 ? (
              <div className="w-full py-12 aspect-square bg-mainBlue grid place-items-center border-2 border-l-0 border-mainText">
                {grid.fourtquadrant && (
                  <div className="text-center px-4 md:px-12">
                    <h3 className="text-4xl mb-4">
                      {grid.fourtquadrant.title}
                    </h3>
                    <p className="mb-6">{grid.fourtquadrant.description}</p>
                    {grid.fourtquadrant.button && (
                      <ButtonBorder
                        text={grid.fourtquadrant.textbutton}
                        color="mainText"
                      />
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-mainBlue w-full py-12 aspect-square border-2 border-l-0 border-mainText hidden md:block" />
            )}
          </div> */}
        </section>
      )}

      {/* <section className="text-center py-0 md:py-6">
        <div className="grid md:grid-cols-3 inside gap-5 pt-0 pb-6 md:py-6 px-4 md:px-0">
          <Card
            image={cardImage}
            heading={card.heading}
            desc={card.description}
          />
          <Card
            image={cardImage}
            heading={card.heading}
            desc={card.description}
          />
          <Card
            image={cardImage}
            heading={card.heading}
            desc={card.description}
          />
        </div>
        <div>
          <ButtonContained text="read more" color="mainOrange" />
        </div>
      </section> */}
      <EventTabs />
      {fullrow && (
        <section className="bg-mainOrange widest text-white h-[550px] md:h-[400px] flex px-4 md:px-0">
          <div className="inside grid md:grid-cols-5 py-24">
            <h2 className="text-4xl text-white col-span-2 md:w-4/5">
              {fullrow.title}
            </h2>

            <div className="col-span-3">
              <p className="text-white mb-12">{fullrow.description}</p>
              {fullrow.button && (
                <ButtonBorder text={fullrow.textbutton} color="white" />
              )}
            </div>
          </div>
        </section>
      )}
      {grid2 && (
        <section className="inside -mt-16 mb-8 px-4 md:px-0">
          <GridSquare
            firstquadrant={grid2.firstquadrant}
            secondquadrant={grid2.secondquadrant}
            thirdquadrant={grid2.thirdquadrant}
            fourtquadrant={grid2.fourtquadrant}
          />
          {/* <div className="grid md:grid-cols-2 place-items-center ">
            {grid2.firstquadrant.title.length > 1 ? (
              <div className="w-full py-12 aspect-square bg-mainYellow grid place-items-center border-2 border-b-0 border-mainText">
                {grid2.firstquadrant && (
                  <div className="text-center px-4 md:px-12">
                    <h3 className="text-4xl">{grid2.firstquadrant.title}</h3>
                    <p className="mt-4 text-2xl">
                      {grid2.firstquadrant.description}
                    </p>
                    {grid2.firstquadrant.button && (
                      <ButtonBorder
                        text={grid2.firstquadrant.textbutton}
                        color="mainText"
                      />
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-mainYellow w-full py-12 aspect-square border-2 border-b-0 border-mainText hidden md:block" />
            )}

            <div className="w-full py-12 aspect-square bg-white grid place-items-center border-2 md:border-l-0 border-b-0 border-mainText">
              {grid2.secondquadrant && (
                <div className="text-center px-4 md:px-12">
                  <h3 className="text-4xl mb-4">
                    {grid2.secondquadrant.title}
                  </h3>
                  <p className="mb-6">{grid2.secondquadrant.description}</p>
                  {grid2.secondquadrant.button && (
                    <ButtonBorder
                      text={grid2.secondquadrant.textbutton}
                      color="mainText"
                    />
                  )}
                </div>
              )}
            </div>
            <div className="w-full py-12 aspect-square bg-white grid place-items-center border-2 border-mainText">
              {grid2.thirdquadrant && (
                <div className="text-center px-4 md:px-12">
                  <h3 className="text-4xl mb-4">{grid2.thirdquadrant.title}</h3>
                  <p className="mb-6">{grid2.thirdquadrant.description}</p>
                  {grid2.thirdquadrant.button && (
                    <ButtonBorder
                      text={grid2.thirdquadrant.textbutton}
                      color="mainText"
                    />
                  )}
                </div>
              )}
            </div>
            {grid2.fourtquadrant.title.length > 1 ? (
              <div className="w-full py-12 aspect-square bg-mainBlue grid place-items-center border-2 border-l-0 border-mainText">
                {grid2.fourtquadrant && (
                  <div className="text-center px-4 md:px-12">
                    <h3 className="text-4xl mb-4">
                      {grid2.fourtquadrant.title}
                    </h3>
                    <p className="mb-6">{grid2.fourtquadrant.description}</p>
                    {grid2.fourtquadrant.button && (
                      <ButtonBorder
                        text={grid2.fourtquadrant.textbutton}
                        color="mainText"
                      />
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-mainBlue w-full py-12 aspect-square border-2 border-l-0 border-mainText hidden md:block" />
            )}
          </div> */}
        </section>
      )}
      {fullrow2 && (
        <section className="widest flex px-4 md:px-0">
          <div className="inside flex flex-col md:flex-row gap-4 py-6 md:py-24">
            {fullrow2.title && (
              <div className="md:w-4/5">
                <h2 className="text-4xl text-mainText font-semibold">
                  {fullrow2.title}
                </h2>
                <div className="space-y-2 mt-4">
                  <div>
                    <ButtonBorder
                      text="Participate as Agency"
                      color="mainText"
                    />
                  </div>
                  <div>
                    <ButtonBorder
                      text="Participate as Individual"
                      color="mainText"
                    />
                  </div>
                </div>
              </div>
            )}
            <div>
              {fullrow2.description && (
                <p className="text-mainText mb-12 mr-4 md:mr-24">
                  {fullrow2.description}
                </p>
              )}
              {fullrow2.button && (
                <ButtonBorder
                  text={fullrow2.textbutton}
                  color="mainOrange"
                  // classes="border-mainOrange text-mainOrange !bg-white border-2"
                />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default LandingPage;
