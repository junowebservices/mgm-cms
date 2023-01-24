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
      <section className="text-center py-6">
        <div className="grid md:grid-cols-3 inside gap-5 py-6">
          <Card />
          <Card />
          <Card />
        </div>
        <div>
          <ButtonContained text="read more" color="mainOrange" />
        </div>
      </section>
      <EventTabs />
      <Sample />
      <Embracing />
      <CelebrateWithUs />
    </div>
  );
};

export default LandingPage;
