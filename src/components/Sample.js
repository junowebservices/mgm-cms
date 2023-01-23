import React from "react";
import Button from "./ButtonBorder";

const Sample = () => {
  return (
    <section className="bg-mainOrange widest text-white h-[650px] md:h-[500px] flex">
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi amet
            autem perspiciatis fugiat nam rem, corporis in explicabo molestias
            culpa vitae eveniet, excepturi nulla eum aliquid quos suscipit
            dolores odio.
          </p>
          <Button text="Know more" color="white" />
        </div>
      </div>
    </section>
  );
};

export default Sample;
