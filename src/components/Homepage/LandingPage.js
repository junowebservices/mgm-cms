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

const LandingPage = () => {
  return (
    <div>
      <Slider />
      <LatestNews />
      <section className="text-center py-0 md:py-6">
        <div className="grid md:grid-cols-3 inside gap-5 pt-0 pb-6 md:py-6 px-4 md:px-0">
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <ButtonContained text="read more" color="mainOrange" />
        </div>
      </section>
      <EventTabs />
      <section className="bg-mainOrange widest text-white h-[650px] md:h-[500px] flex px-4 md:px-0">
        <div className="inside grid md:grid-cols-5 py-24">
          <h2 className="text-5xl text-white col-span-2">
            Museums <br className="hidden md:block" />
            and Galleries <br className="hidden md:block" />
            Month
            <br className="hidden md:block" />
            (MGM)
          </h2>

          <div className="col-span-3">
            <p className="text-white mb-12">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
              molestias culpa vitae eveniet, excepturi nulla eum aliquid quos
              suscipit dolores odio.
            </p>
            <ButtonBorder text="Know more" color="white" />
          </div>
        </div>
      </section>
      <section className="inside -mt-24 mb-8 px-4 md:px-0">
        <div className="grid md:grid-cols-2 place-items-center ">
          <div className="bg-mainYellow w-full py-12 md:py-12 md:h-[400px] hidden md:block" />
          <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 md:border-l-0 border-b-0 border-mainText">
            <div className="text-center px-4 md:px-12">
              <h3 className="text-4xl mb-4">Embracing Uncertainly</h3>
              <p className="mb-2 md:mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
                quaerat obcaecati sunt amet atque nobis modi eaque reiciendis,
              </p>
              <ButtonBorder text="explore" color="mainOrange" />
            </div>
          </div>
          <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 border-mainText">
            <div className="text-center  px-4 md:px-12">
              <h3 className="text-4xl mb-4">Events & Activities</h3>
              <p className="mb-2 md:mb-6">
                adipisicing elit. Eum, quidem voluptate! Repudiandae a autem
                asperiores esse incidunt
              </p>
              <ButtonBorder text="see more" color="mainOrange" />
            </div>
          </div>
          <div className="bg-mainBlue w-full py-12 md:py-12 md:h-[400px] border-2 border-l-0 border-mainText hidden md:block" />
        </div>
      </section>
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
