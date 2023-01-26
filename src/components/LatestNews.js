import React from "react";

const LatestNews = ({}) => {
  return (
    <section className="inside mb-8 px-4 md:px-0">
      <h2 className="text-5xl my-8">Latest News</h2>
      <div className="grid md:grid-cols-2 place-items-center ">
        <div className="bg-mainOrange w-full py-12 md:py-12 md:h-[400px] border-2 border-b-0 border-mainText hidden md:block" />
        <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 md:border-l-0 border-b-0 border-mainText">
          <div className="text-center px-4 md:px-12">
            <h3 className="text-4xl mb-4">Second Quadrant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
              quaerat obcaecati sunt amet atque nobis modi eaque reiciendis,
              officiis voluptas explicabo alias autem? Modi voluptas plac
            </p>
          </div>
        </div>
        <div className="w-full py-12 md:py-12 md:h-[400px] bg-white grid place-items-center border-2 border-mainText">
          <div className="text-center  px-4 md:px-12">
            <h3 className="text-4xl mb-4">Third Quadrant</h3>
            <p>
              adipisicing elit. Eum, quidem voluptate! Repudiandae a autem
              asperiores esse incidunt est aperiam quia expedita, eos minima
              nemo distinctio quibusdam, nihil modi delectus magni.
            </p>
          </div>
        </div>
        <div className="bg-mainYellow w-full py-12 md:py-12 md:h-[400px] border-2 border-l-0 border-mainText hidden md:block" />
      </div>
    </section>
  );
};

export default LatestNews;
