import React from "react";
import "./../../Index.css";
import { useNavigate } from "react-router-dom";

const PickUpRequest = () => {
  const nav = useNavigate();
  const handlePickUp = () => {
    nav("/book-now");
  };

  return (
    <>
      <div className="md:col-span-2 p-8 h-[10px] bg-white ">
        <h3 className="text-[25px] font-bold text-[#032B56] mb-6">
          Request Pick-up
        </h3>
        <form className="grid grid-cols-3 gap-4">
          <input
            className="input"
            type="Name"
            placeholder="Enter Your Name"
            id="Name"
          />
          <input
            className="input"
            type="address"
            placeholder="Enter Your Address"
            id="address"
          />
          <input
            className="input"
            type="clothes"
            placeholder="Enter type of clothes"
            id="clothes"
          />
          <input className="input" type="date" />
          <input className="input" type="time" />
          <button
            onClick={handlePickUp}
            className="bg-[#1665F8] text-white rounded px-4 py-3 font-semibold hover:bg-[#032B56] transition"
          >
            Pick-up!
          </button>
        </form>
      </div>
    </>
  );
};

export default PickUpRequest;
