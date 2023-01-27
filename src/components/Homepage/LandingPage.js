import React from "react";
import Features from "../Features";
import BlogRoll from "../BlogRoll";
import FullWidthImage from "../FullWidthImage";
import LatestNews from "../LatestNews";
import Slider from "../Slider";
import Card from "../Card";
import ButtonContained from "../ButtonContained";
import EventTabs from "../EventTabs";
import Sample from "../Sample";
import Embracing from "../Embracing";
import CelebrateWithUs from "../CelebrateWithUs";
import ButtonBorder from "../ButtonBorder";
import { getImage } from "gatsby-plugin-image";

const LandingPage = ({
  title,
  grid,
  grid2,
  // firstquadrant,
  // secondquadrant,
  // thirdquadrant,
  // fourtquadrant,
  fullrow,
  // card,
}) => {
  // const cardImage = getImage(card.image1) || card.image1;
  return (
    <div>
      <Slider />
      {grid && (
        <section className="inside mb-8 px-4 md:px-0">
          {title && <h2 className="text-5xl my-8">{grid.title}</h2>}
          <div className="grid md:grid-cols-2 place-items-center ">
            <div className="bg-mainOrange w-full py-12 md:py-12 md:h-[400px] grid place-items-center border-2 border-b-0 border-mainText">
              <div className="text-center px-4 md:px-12">
                <h3 className="text-4xl mb-4">
                  {grid.firstquadrant && grid.firstquadrant.title}
                </h3>
                <p>{grid.firstquadrant && grid.firstquadrant.description}</p>
              </div>
            </div>
            {grid.secondquadrant && (
              <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 md:border-l-0 border-b-0 border-mainText">
                <div className="text-center px-4 md:px-12">
                  <h3 className="text-4xl mb-4">{grid.secondquadrant.title}</h3>
                  <p>{grid.secondquadrant.description}</p>
                </div>
              </div>
            )}
            {grid.thirdquadrant && (
              <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 border-mainText">
                <div className="text-center  px-4 md:px-12">
                  <h3 className="text-4xl mb-4">{grid.thirdquadrant.title}</h3>
                  <p>{grid.thirdquadrant.description}</p>
                </div>
              </div>
            )}
            <div className="w-full py-12 md:py-12 md:h-[400px] bg-mainYellow grid place-items-center border-2 border-l-0 border-mainText">
              <div className="text-center  px-4 md:px-12">
                <h3 className="text-4xl mb-4">
                  {grid.fourtquadrant && grid.fourtquadrant.title}
                </h3>
                <p>{grid.fourtquadrant && grid.fourtquadrant.description}</p>
              </div>
            </div>
          </div>
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
        <section className="bg-mainOrange widest text-white h-[650px] md:h-[500px] flex px-4 md:px-0">
          <div className="inside grid md:grid-cols-5 py-24">
            <h2 className="text-5xl text-white col-span-2 md:w-[200px]">
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
        <section className="inside -mt-24 mb-8 px-4 md:px-0">
          <div className="grid md:grid-cols-2 place-items-center ">
            <div className="bg-mainYellow w-full py-12 md:py-12 md:h-[400px] hidden md:block" />
            <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 md:border-l-0 border-b-0 border-mainText">
              <div className="text-center px-4 md:px-12">
                <h3 className="text-4xl mb-4">Embracing Uncertainly</h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  id quaerat obcaecati sunt amet atque nobis modi eaque
                  reiciendis,
                </p>
                <ButtonBorder text="explore" color="mainOrange" />
              </div>
            </div>
            <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 border-mainText">
              <div className="text-center  px-4 md:px-12">
                <h3 className="text-4xl mb-4">Events & Activities</h3>
                <p className="mb-6">
                  adipisicing elit. Eum, quidem voluptate! Repudiandae a autem
                  asperiores esse incidunt
                </p>
                <ButtonBorder text="see more" color="mainOrange" />
              </div>
            </div>
            <div className="bg-mainBlue w-full py-12 md:py-12 md:h-[400px] border-2 border-l-0 border-mainText hidden md:block" />
          </div>
        </section>
      )}
      <section className="widest flex px-4 md:px-0">
        <div className="inside flex flex-col md:flex-row gap-4 py-24">
          <h2 className="text-5xl text-mainText font-semibold md:w-4/5">
            Celebrate
            <br />
            with us
          </h2>

          <div>
            <p className="text-mainText mb-12 mr-4 md:mr-24">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
              molestias culpa vitae eveniet, excepturi nulla eum aliquid quos
              suscipit dolores odio.
            </p>
            <ButtonBorder
              text="Join us"
              color="mainOrange"
              // classes="border-mainOrange text-mainOrange !bg-white border-2"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
