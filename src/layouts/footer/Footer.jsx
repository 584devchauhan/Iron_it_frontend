import React from "react";
import Company from "./Company";
import WorkDetailsCard from "../../components/cards/WorkDetailsCard";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();

  const handleClick = () => {
    nav("/");
  };
  return (
    <>
      {/* <div className="border-4 border-red-800"> */}
      <div className="relative h-[950px] flex justify-center items-center  overflow-hidden">
        <div className="absolute inset-0 bg-gray-400/40" />

        <div className="relative h-full">
          <WorkDetailsCard />
        </div>
      </div>

      <div className="bg-[#032B56]">
        <div className="relative z-20 max-w-[1280px] mx-auto -translate-y-24 px-6">
          <div className="bg-white rounded-md shadow-xl grid md:grid-cols-2">
            <div className="p-12 border-r border-gray-200">
              <h2 className="text-4xl font-bold text-[#032B56] mb-3">
                Need Help?
              </h2>

              <p className="text-gray-600 mb-8">
                Contact us on the given toll free number.
              </p>

              <h3 className="text-4xl font-bold text-[#032B56]">
                +(91) 123-123-1234
              </h3>
            </div>
            <div className="p-12">
              <h2 className="text-4xl font-bold text-[#032B56] mb-3">
                Send Us!
              </h2>

              <p className="text-gray-600 mb-8">
                Send us your complaint or feedback.
              </p>

              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-12 px-4 border border-gray-300 rounded outline-none focus:border-blue-600"
                />

                <button className="bg-blue-600 hover:bg-blue-950 text-white px-8 rounded font-semibold transition">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white pt-16 pb-12">
          <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
            {/* Logo */}
            <div onClick={handleClick}>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="images/logo.jpg"
                  alt="Cleanox Logo"
                  className="w-12 h-12"
                />

                <h2 className="text-5xl font-bold">Cleanox</h2>
              </div>

              <p className="text-gray-300 leading-8">
                A platform that provides online laundry and dry-cleaning
                services with fast pickup and doorstep delivery.
              </p>
            </div>

            <div>
              <Company />
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Footer;
