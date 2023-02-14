import React from "react";

const MgmFullRow = () => {
  return (
    <section className="bg-mainOrange text-white mt-6 px-4 md:px-0 widest">
      <div className="grid md:grid-cols-5 pt-24 pb-72 lg:w-8/12 mx-auto">
        <h2 className="text-4xl text-white col-span-2 md:w-4/5 font-bold">
          dit? Molestias, blanditiis voluptate.
        </h2>

        <div className="col-span-3">
          <p className="text-white mb-6 mt-2 lg:mb-12 lg:mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            nesciunt eius cum dolorum fugit vel harum reiciendis unde. Amet,
            quaerat et. Beatae quam, saepe consequuntur facilis exercitationem
            nihil molestias earum!
          </p>
          <div>
            <button
              type="button"
              className="text-white hover:text-mainOrange border-2 border-white hover:bg-white focus:ring-4 focus:outline-none focus:ring-mainOrange-dark font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase transition-all ease-in-out duration-300 "
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MgmFullRow;
