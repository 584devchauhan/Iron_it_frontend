import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../assets/logo.jpg"; // Adjust path if needed

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Service", to: "/service" },
  { label: "Contact Us", to: "/contact-us" },
];

const Navbar = () => {
  const nav = useNavigate();
  const handaleloginClick = () => {
    nav("/user_login");
  };

  const handalesinginClick = () => {
    nav("/user_singin");
  };
  const handleLogo = () => {
    nav("/");
  };

  return (
    <>
      <header>
        <div className="fixed z-30 w-full bg-white shadow-sm items-center">
          <div className="max-w-[1280px] mx-auto h-[84px] flex items-center px-4">
            {/* logo  */}
            <div onClick={handleLogo} className=" mr-60">
              <img
                src={`${"images/logo1.jpg"}`}
                alt="Cleanox Logo"
                className="h-12 w-auto"
              />
            </div>

            {/* Links  */}
            <nav className="flex items-center gap-8 text-[#032B56] text-[16px] font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="  hover:text-blue-600 transition"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Search  */}
            <div className="ml-auto flex items-center  gap-5">
              <div className="w-[180px]">
                <input
                  type="search"
                  className="w-full border-none hover:border-4 outline-none items-center py-1"
                  placeholder="🔎Search...."
                />
              </div>

              {/* Buttons  */}

              <button
                onClick={handaleloginClick}
                className="bg-blue-600 text-white px-8 h-[84px] hover:bg-blue-700"
              >
                Login
              </button>
              <button
                onClick={handalesinginClick}
                className="bg-blue-600 text-white px-8 h-[84px] hover:bg-blue-700"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
