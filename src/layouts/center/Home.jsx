import React from "react";
import { products } from "../../data/data";
import Cards from "../../components/cards/Cards";
// import bgImage from "./../../../public/images/Image.jpg";
import "./../../Index.css";
import PickUpRequest from "../../components/forms/PickUpRequest";
import GetPrimium from "../../components/buttons/GetPrimium";
import Service from "./Service";
import { useNavigate } from "react-router-dom";
import About from "./About";
import ContectUs from "./ContectUs";
import BookNow from "../../components/buttons/BookNow";
import CosutmerFeedBack from "../../components/cosutmerFeedBack";

const Home = () => {
  const nav = useNavigate();
  const handleOrderNow = () => {
    nav("/book-now");
  };
  return (
    <>
      <div className="relative w-full h-[900px]  overflow-hidden  ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${"images/home.jpg"})`,
            backgroundPosition: "center 30%",
          }}
        ></div>

        <div className="absolute inset-0 bg-black/30  "></div>

        {/* text area  */}
        <div className="relative flex items-start z-10 max-w-[1280px] mx-auto px-6 w-full">
          <div className="pt-60 w-full ">
            <p className="text-white font-semibold text-sm mb-6">
              Professional Laundry Service
            </p>

            <h1 className="text-white text-5xl md:text-7xl font-black leading-none">
              A better you
              <br />
              start with clean
              <br />
              clothes
            </h1>

            <p className="text-white/90 mt-8 text-lg max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>

            <div className="flex gap-4 mt-10">
              <button
                onClick={handleOrderNow}
                className="bg-blue-600 px-20 py-5 text-white font-semibold rounded hover:bg-blue-950"
              >
                Order Now!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Request Fprm */}
      <div className="relative z-20 max-w-[1280px]  mx-auto -mt-30 shadow-xl">
        <div className="flex md:grid-cols-3 overflow-hidden bg-white">
          <PickUpRequest />
          <div className="relative p-10 bg-blue-600 w-140 bg-cover bg-center">
            <div className="relative z-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Special Offer</h3>
              <p className="mb-6 text-white/90">
                Get Premium Care for your Premium <br /> Clothes
              </p>
              <div className="">
                <GetPrimium />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="py-24 bg-white h-[590px]">
        <div className=" max-w-[1320px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div
              className=" w-[600px] h-[502px] rounded-md bg-cover bg-center"
              style={{ backgroundImage: `url(${"images/home2.jpg"})` }}
            ></div>

            <div>
              <h1 className="text-blue-600 font-semibold mb-4">
                About compnay
              </h1>
              <p className="text-5xl font-black text-[#032B56] leading-tight mb-8">
                Excellent quality is worth <br /> the price{" "}
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                We are here for your clothes and your reputation. We provide
                <br /> best service and feedback
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Book Now  */}
      <div className="mt-30 bg-blue-950">
        <div className=" mx-auto grid lg:grid-cols-2">
          <div className="flex justify-end">
            <div className="max-w-[700px] w-full flex flex-col justify-center px-10 md:px-20 py-24">
              <p className="text-white font-semibold mb-6">Our Promise</p>

              <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
                24 hours to a day, clean clothes follow the same time schedule.
              </h2>

              <p className="text-white/80 mt-8 max-w-md">
                Contact us today for fast, reliable, and professional service.
              </p>

              <div className="mt-10 flex justify-center items-center py-4 w-[200px]  rounded-xl font-bold bg-white text-blue-900  hover:bg-blue-950 hover:text-white hover:text-2xl transition-all duration-200 ">
                <BookNow />
              </div>
            </div>
          </div>
          <div
            className="w-full h-[400px] lg:h-auto min-h-[400px] lg:min-h-[720px] bg-cover bg-center"
            style={{
              backgroundImage: `url(images/one.jpg)`,
            }}
          />
        </div>
      </div>

      {/* Service */}

      <Service />

      {/* About-us  */}

      <About />

      {/* Contect-us */}

      <ContectUs />

      {/* feedback */}
      <CosutmerFeedBack />
    </>
  );
};

export default Home;
