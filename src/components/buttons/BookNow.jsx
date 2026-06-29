import React from "react";
import { useNavigate } from "react-router-dom";

const BookNow = () => {
  const nav = useNavigate();
  const handleBookNow = (e) => {
    nav("/book-now");
  };
  return (
    <div>
      <button
        
        onClick={handleBookNow}
      >
        Book Now
      </button>
    </div>
  );
};

export default BookNow;
