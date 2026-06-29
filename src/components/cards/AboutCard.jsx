import React from "react";
import { MdDryCleaning } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { FcHome } from "react-icons/fc";

const AboutCard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        <div className="about-card">
          <FcHome className="icon nav-shadow"/>
          <h3 className="heading">We-Collect</h3>
          <p className="p ">Collect your order from your location </p>
        </div>
        <div className="about-card ">
          <MdDryCleaning className="icon nav-shadow" />
          <h3 className="heading">We-Clean</h3>
          <p className="p">Clean & Steam press your clothes </p>
        </div>
        <div className="about-card">
          <GrDeliver className="icon nav-shadow" />
          <h3 className="heading ">We-Deliver</h3>
          <p className="p">Deliver your clothes to your location </p>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
