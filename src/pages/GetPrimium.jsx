import React, { useEffect, useState } from "react";
import axios from "axios";
import GetPrimiumButton from "../components/buttons/GetPrimium";

const GetPrimium = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/premium");

      setPlans(res.data.plans);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="relative origin-center shadow-md min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(images/primium.jpg)` }}
      />

      <div className="absolute inset-0 bg-white/90" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-30">
        <h2 className="text-[38px] font-black leading-[1.1] text-[#032B56]">
          Laundry. It's no longer
          <br />
          just your mom's job
        </h2>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 pb-20 mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div className="primium" key={plan._id}>
              <div className="primiumCardHeading">
                <h1>{plan.name}</h1>
              </div>

              <h3 className="price">₹{plan.price}/month</h3>

              <ul className="primium-list">
                <li>{plan.features.fastService && "Fast Service"}</li>

                <li>{plan.features.discount}% Discount on every order</li>

                <li>
                  {plan.features.freeDelivery
                    ? "Free Delivery"
                    : "Paid Delivery"}
                </li>

                <li>
                  {plan.features.priority
                    ? "Priority Cleaning & Delivery"
                    : "Normal Priority"}
                </li>
              </ul>

              <div className="mt-5 flex justify-center">
                <GetPrimiumButton plan={plan} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetPrimium;