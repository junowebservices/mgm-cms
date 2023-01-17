import React from "react";

const LatestNews = () => {
  return (
    <div className="inside pt-4">
      <h2 className="text-5xl my-8">Latest News</h2>
      <div className="grid grid-cols-2 place-items-center">
        <div className="w-full h-[500px] bg-orange-500" />
        <div className="w-full h-[500px] grid place-items-center">
          <div className="text-center px-12">
            <h3 className="text-4xl mb-4">Latest</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              quasi qui dolorem consequuntur dolor nemo nostrum labore incidunt.
              Eaque cum aliquid soluta minima sit non nisi optio ducimus amet!
              Distinctio!
            </p>
          </div>
        </div>
        <div className="w-full h-[500px] grid place-items-center">
          <div className="text-center px-12">
            <h3 className="text-4xl mb-4">Latest</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              quasi qui dolorem coxnsequuntur dolor nemo nostrum labore
              incidunt. Eaque cum aliquid soluta minima sit non nisi optio
              ducimus amet! Distinctio!
            </p>
          </div>
        </div>
        <div className="w-full h-[500px] bg-yellow-400" />
      </div>
    </div>
  );
};

export default LatestNews;
