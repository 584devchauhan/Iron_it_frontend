import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = ({ image, title, description, onClick }) => {
  const nav = useNavigate();
  const handleLearnMore = () => {
    nav("/learn-more");
  };
  return (
    <div
      onClick={handleLearnMore}
      className="relative bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group overflow-hidden"
    >
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 ">
        <img src={image} alt={title} className="w-20 h-20 p-2 rounded-md mx-auto mb-8 bg-gray-300 hover:bg-white " />

        <h3 className="text-3xl font-bold text-[#032B56] mb-5 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 leading-7 mb-8 group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        <button
          onClick={handleLearnMore}
          className="text-blue-600 font-semibold group-hover:text-white transition-colors duration-300"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Cards;
