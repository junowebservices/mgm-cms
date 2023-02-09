import React from "react";
import ButtonBorder from "./ButtonBorder";

const CelebrateWithUs = () => {
  return (
    <section className="widest flex">
      <div className="inside flex flex-col md:flex-row gap-4 py-24">
        <h2 className="text-5xl text-mainText font-semibold md:w-4/5">
          Celebrate
          <br className="hidden md:block" />
          with us
        </h2>

        <div>
          <p className="text-mainText mb-12 mr-4 md:mr-24">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi amet
            autem perspiciatis fugiat nam rem, corporis in explicabo molestias
            culpa vitae eveniet, excepturi nulla eum aliquid quos suscipit
            dolores odio.
          </p>
          <ButtonBorder
            text="Join us"
            // classes="border-mainOrange text-mainOrange !bg-white border-2"
          />
        </div>
      </div>
    </section>
  );
};

export default CelebrateWithUs;
