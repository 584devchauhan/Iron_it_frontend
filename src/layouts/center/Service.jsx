import React from "react";
import { products } from "../../data/data";
import Cards from "../../components/cards/Cards";
// import bgImage from "./../../../public/images/image3.jpg";
import { useNavigate } from "react-router-dom";
import BookNow from "../../components/buttons/BookNow";

const Service = () => {
  return (
    <>
      <div className="bg-white relative h-[1250px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${"images/service.jpg"})` }}
        />
        <div className="absolute inset-0 bg-cover bg-white/90 "></div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 pt-30 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-blue-600 font-semibold mb-3">About Service</p>

              <h2 className="text-6xl font-black text-[#032B56] leading-tight">
                Clean, Iron, and fast pickup.
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <Cards
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                onClick={() => console.log(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
