import React from "react";
import AboutCard from "../../components/cards/AboutCard";
// import bgImage from "./../../../public/images/about.jpg";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import BookNow from "../../components/buttons/BookNow";
import GetPrimium from "../../components/buttons/GetPrimium";

const About = () => {
  return (
    <>
      <div className="relative h-[560px]  overflow-hidden ">
        <div
          className="absolute  inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("/images/component.jpg")`,
            backgroundPosition: "center 10%",
          }}
        />

        <div className="absolute inset-0  bg-blue-950/60" />

        <div className="relative z-10 max-w-[1280px] mx-auto flex items-center h-full px-6 lg:px-20">
          <div className="max-w-[520px] text-white">
            <div className="inline-flex items-center justify-center w-20 h-20   backdrop-blur-md mb-3 rounded-2xl  ">
              <VscWorkspaceTrusted className="text-6xl" />
            </div>

            <h1 className="text-5xl md:text-4xl font-bold leading-tight mb-5">
              Trusted Dry Cleaning &
              <br />
              Delivery Service
            </h1>

            <p className="text-xl text-gray-200 mb-8">
              Professional garment care with fast pickup and doorstep delivery.
              Fresh, clean, and ready when you need it.
            </p>

            <div className="flex gap-4">
              <div className=" flex justify-center items-center py-4 rounded-xl font-bold bg-white transitionbg-white text-blue-900 w-[200px] hover:bg-blue-950 hover:text-white hover:text-2xl transition-all duration-200">
                <BookNow />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second Card  */}
      <div className="relative z-10 max-w-[1280px] h-[700px] mx-auto px-6  py-20 ">
        <div className="grid lg:grid-cols-2  items-start mb-10">
          <div>
            <p className="text-blue-600 font-semibold p-2">Why Choose Us</p>

            <h2 className="text-5xl  font-black text-[#032B56] leading-tight">
              We make your clothes shine bright.
            </h2>
          </div>
        </div>
        <AboutCard />
      </div>

      {/* Primium Details  */}
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
                <GetPrimium />
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
                <GetPrimium />
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
                <GetPrimium />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
