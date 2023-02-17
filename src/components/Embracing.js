import React from "react";
import ButtonMgm from "./ButtonMgm";

const Embracing = () => {
  return (
    <div className="inside -mt-24 mb-8">
      <div className="grid md:grid-cols-2 place-items-center ">
        <div className="bg-mainYellow w-full py-12 md:py-12 md:h-[400px] hidden md:block" />
        <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 md:border-l-0 border-b-0 border-mainText">
          <div className="text-center px-4 md:px-12">
            <h3 className="text-4xl mb-4">Embracing Uncertainly</h3>
            <p className="mb-2 md:mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
              quaerat obcaecati sunt amet atque nobis modi eaque reiciendis,
            </p>
            <ButtonMgm text="explore" />
          </div>
        </div>
        <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 border-mainText">
          <div className="text-center  px-4 md:px-12">
            <h3 className="text-4xl mb-4">Events & Activities</h3>
            <p className="mb-2 md:mb-6">
              adipisicing elit. Eum, quidem voluptate! Repudiandae a autem
              asperiores esse incidunt
            </p>
            <ButtonMgm text="see more" />
          </div>
        </div>
        <div className="bg-mainBlue w-full py-12 md:py-12 md:h-[400px] border-2 border-l-0 border-mainText hidden md:block" />
      </div>
    </div>
  );
};

export default Embracing;
