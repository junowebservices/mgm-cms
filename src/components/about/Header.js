import React from "react";
import ButtonBorder from "../ButtonBorder";

const Header = () => {
  return (
    <>
      <section className="bg-mainBlue widest text-mainText">
        <div className="inside grid md:grid-cols-5 gap-4 py-24">
          <div className="col-span-2">
            <h2 className="text-5xl font-medium">
              Embracing <br className="hidden md:block" />
              Uncertainly: <br className="hidden md:block" />
            </h2>
            <p className="text-3xl font-playfair">
              Showcasing <br className="hidden md:block" />
              Solidaroty, Hope, <br className="hidden md:block" />
              and Recovery
            </p>
          </div>
          <div className="col-span-3">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
              molestias culpa vitae eveniet, excepturi nulla eum aliquid quos
              suscipit dolores odio.
            </p>
          </div>
        </div>
      </section>
      <section className="widest text-mainText flex">
        <div className="inside grid md:grid-cols-5 gap-4 py-24">
          <div className="col-span-2">
            <h2 className="text-5xl font-medium">Our goals</h2>
            <p className="text-lg mt-4 md:mt-6 max-w-[280px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              quasi magnam sint quae earum explicabo quam, harum temporibus
              optio
            </p>
          </div>
          <div className="col-span-3">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              amet autem perspiciatis fugiat nam rem, corporis in explicabo
            </p>
          </div>
        </div>
      </section>
      <section className="inside my-8">
        <div className="grid md:grid-cols-2 place-items-center ">
          <div className="bg-white border-8 border-mainOrange border-r-0 grid place-items-center w-full md:h-[550px]">
            <div className="text-center mx-4 md:mx-12">
              <h3 className="text-6xl font-semibold">
                Events & <br className="hidden md:block" />
                Activities
              </h3>
              <p className="text-2xl font-light my-4 md:my-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
                quaerat obcaecati sunt amet atque nobis modi eaque reiciendis,
                officiis voluptas explicabo alias autem? Modi vo
              </p>
              <ButtonBorder text="see more" color="mainOrange" />
            </div>
          </div>
          <div className="bg-mainOrange grid place-items-center w-full md:h-[550px]">
            <div className="text-center mx-4 md:mx-12">
              <h3 className="text-6xl font-semibold text-white">
                Events & <br className="hidden md:block" />
                Activities
              </h3>
              <p className="text-2xl font-light my-4 md:my-10 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
                quaerat obcaecati sunt amet atque nobis modi eaque reiciendis,
                officiis voluptas explicabo alias autem? Modi voluptas plac
              </p>
              <ButtonBorder text="join us" color="white" />
            </div>
          </div>
          <div className="bg-mainYellow grid place-items-center w-full md:h-[550px]">
            <div className="text-center mx-4 md:mx-12">
              <h3 className="text-6xl font-semibold text-white">Come visit</h3>
              <p className="text-2xl font-light my-4 md:my-10 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
                quaerat obcaecati sunt amet atque nobis modi eaque reiciendis,
                officiis voluptas explicabo alias autem? Modi voluptas plac
              </p>
              <ButtonBorder text="find us" color="white" />
            </div>
          </div>
          <div className="bg-mainBlue grid place-items-center w-full md:h-[550px]">
            <div className="text-center mx-4 md:mx-12">
              <h3 className="text-6xl font-semibold text-white">
                Get in toucch
              </h3>
              <p className="text-2xl font-light my-4 md:my-10 text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam id
                quaerat obcaecati sunt amet atque nobis modi eaque reiciendis,
                officiis voluptas explicabo alias autem? Modi voluptas plac
              </p>
              <ButtonBorder text="cointact us" color="white" />
            </div>
          </div>
        </div>
      </section>
      <section className="widest text-mainText flex">
        <div className="inside grid md:grid-cols-5 gap-4 py-24">
          <div className="col-span-2">
            <h2 className="text-5xl">
              Partners/
              <br className="hidden md:block" />
              Organizations
            </h2>
          </div>
          <div className="col-span-3">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem provident tempora laboriosam, quod praesentium vitae,
              facilis quos delectus itaque excepturi sequi commodi animi nulla
              ab enim exercitationem a culpa. Necessitatibus.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
