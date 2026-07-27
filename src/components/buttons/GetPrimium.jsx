import React from "react";
import { useNavigate } from "react-router-dom";

const GetPrimiumButton = () => {
  const nav = useNavigate();
  const handleGetPrimium = () => {
    nav("/buy-primium");
  };
  return (
    <div>
      <button
        className=" bg-white text-black border-white px-6 py-3 rounded hover:bg-blue-950 hover:text-white "
        onClick={handleGetPrimium}
      >
        Get Primium!
      </button>
    </div>
  );
};

export default GetPrimiumButton;
