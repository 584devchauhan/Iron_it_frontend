import React from "react";
// import AboutCard from "../../components/cards/AboutCard";
// import { VscWorkspaceTrusted } from "react-icons/vsc";
// import BookNow from "../../components/buttons/BookNow";
// import GetPrimium from "../../components/buttons/GetPrimium";
import GetPrimiumButton from "../components/buttons/GetPrimium";

const GetPrimium = () => {
  return (
    <>
      <div className=" relative origin-center shadow-md h-[950px] overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${"images/primium.jpg"})` }}
        />

        <div className="absolute inset-0   bg-white/90 " />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-30">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-10">
            {/* Left */}
            <div>
              <h2 className="text-[38px] font-black leading-[1.1] text-[#032B56]">
                Laundry. It's no longer
                <br />
                just your mom's job
              </h2>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="primium">
              <div className="primiumCardHeading">
                <h1>Premium</h1>
              </div>
              <h3 className="price">₹1000/month</h3>
              <ul className="primium-list">
                <li>Fast Service</li>
                <li>2% Discount on every order</li>
                <li>Free delivery</li>
                <li>First 20-clothes free</li>
                <li>Auto Daily collection and delivery</li>
                <li>First priority of clean and delivery</li>
              </ul>
              <div className=" mt-5 ml-18 ">
                <GetPrimiumButton />
              </div>
            </div>

            <div className="primium">
              <div className="primiumCardHeading">
                <h1>Premium</h1>
              </div>
              <h3 className="price">₹1000/month</h3>
              <ul className="primium-list">
                <li>Fast Service</li>
                <li>2% Discount on every order</li>
                <li>Free delivery</li>
                <li>First 20-clothes free</li>
                <li>Auto Daily collection and delivery</li>
                <li>First priority of clean and delivery</li>
              </ul>
              <div className=" mt-5 ml-18 ">
                <GetPrimiumButton />
              </div>
            </div>
            <div className="primium">
              <div className="primiumCardHeading">
                <h1>Premium</h1>
              </div>
              <h3 className="price">₹1000/month</h3>
              <ul className="primium-list">
                <li>Fast Service</li>
                <li>2% Discount on every order</li>
                <li>Free delivery</li>
                <li>First 20-clothes free</li>
                <li>Auto Daily collection and delivery</li>
                <li>First priority of clean and delivery</li>
              </ul>
              <div className=" mt-5 ml-18 ">
                <GetPrimiumButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetPrimium;
