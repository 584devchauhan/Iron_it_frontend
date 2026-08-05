import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const nav = useNavigate();
  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/api/logout", {
        withCredentials: true,
      });
      nav("/user_login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div
        onClick={handleLogout}
        className="bg-blue-950 text-white text-xl  p-6 font-semibold  px-8 h-[84px] hover:bg-gray-700"
      >
        <button className="text-gray-200">Log Out</button>
      </div>
    </>
  );
};

export default LogOut;
