import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogOut from "../../components/buttons/LogOut";

const navLinks = [
  
  { label: "Get Primium", to: "/buy-primium" },
  { label: "Order Now", to: "/book-now" },
  { label: "My Orders", to: "/my-orders" },

];

const PrivetHeader = () => {
  const nav = useNavigate();
  const handaleloginClick = () => {
    nav("/user_login");
  };

//   const handalesinginClick = () => {
//     nav("/user_singup");
//   };
  const handleLogo = () => {
    nav("/user");
  };

  return (
    <div>
      <>
        <header>
          <div className="fixed z-30 min-w-full bg-white shadow-sm items-center">
            <div className="max-w-[1280px] mx-auto h-[84px] flex items-center px-7">
              {/* logo  */}
              <div onClick={handleLogo} className=" mr-50">
                <img
                  src={`${"images/logo1.jpg"}`}
                  alt="Cleanox Logo"
                  className="h-12 w-auto"
                />
              </div>

              {/* Links  */}
              <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-items-end  pl-50 ">
              <nav className="flex pt-7  gap-8 text-[#032B56] text-[16px] font-medium">
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
              <div className="  flex justify-items-center ">
                <div className="w-[180px] pt-4 p-4 border-blue-300  overflow-hidden ">
                  <input
                    type="search"
                    className="w-full border-none   outline-none items-center p "
                    placeholder="🔎Search...."
                  />
                </div>

                {/* Buttons  */}

                {/* <div > */}
                  <LogOut />
                {/* </div> */}
                {/* <button
                  onClick={handalesinginClick}
                  className="bg-blue-600 text-white px-8 h-[84px] hover:bg-blue-950"
                >
                  getPrimeum
                </button> */}
              </div>
            </div>
          </div></div>
        </header>
      </>
    </div>
  );
};

export default PrivetHeader;
