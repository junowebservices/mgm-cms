import React from "react";

const TwoColumnRow = () => {
  return (
    <section className="bg-mainOrange widest text-white h-[550px] md:h-[400px] flex px-4 md:px-0">
      <div className="inside grid md:grid-cols-5 py-24">
        <h2 className="text-4xl text-white col-span-2 md:w-4/5">
          {fullrow.title}
        </h2>

        <div className="col-span-3">
          <p className="text-white mb-12">{description}</p>
          {textbutton && <ButtonBorder text={textbutton} />}
        </div>
      </div>
    </section>
  );
};

export default TwoColumnRow;
