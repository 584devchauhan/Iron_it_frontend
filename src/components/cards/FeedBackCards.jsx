import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const FeedBackCards = ({item}) => {
  return (
    <>
    <div>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
      <FaQuoteLeft className="text-6xl text-gray-200 mx-auto mb-4" />

      <p className="text-gray-600 mb-6">
        {item.feedback}
      </p>

      <div className="flex justify-center gap-1 mb-4">
        {[...Array(item.rating)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400" />
        ))}
      </div>

      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 rounded-full object-cover mx-auto"
      />

      <h3 className="mt-3 font-semibold text-lg">
        {item.name}
      </h3>
    </div>
    </div>
    </>
  );
};

export default FeedBackCards;
