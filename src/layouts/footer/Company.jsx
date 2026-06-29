import React from "react";
import { Link } from "react-router-dom";

const Company = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Company</h1>
      <ul>
        <li className="footer-link">
          <Link to={"/about"}>About-us</Link>{" "}
        </li>
        <li className="footer-link">
          <Link to={"/service"}>Service</Link>{" "}
        </li>
        <li className="footer-link">
          <Link to={"/contact-us"}>Contect-us</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Company;
