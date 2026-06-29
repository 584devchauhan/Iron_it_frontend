import React from "react";
import FeedBackCards from "./cards/FeedBackCards";
import feedback from "../data/cosutmerFeedBack";

const CosutmerFeedBack = () => {
  return (
    <>
      <div className="relative flex flex-col items-center shadow-md w-full mx-auto h-[750px] py-24 overflow-hidden hover:shadow-xl transition-all duration-300  ">
        <div
          className="absolute inset-0 bg-cover  bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${"images/home2.jpg"})` }}
        ></div>
        <div className="absolute bg-cover inset-0 bg-white/90 "></div>
        <div className="relative  text-5xl  text-blue-950 font-bold">
          <h1>What They Say</h1>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative  w-full px-6 mt-20 gap-3 ">
          {feedback.map((item) => (
            <FeedBackCards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CosutmerFeedBack;
