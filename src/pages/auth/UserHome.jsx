import React from "react";
import { useAuth } from "../../context/AuthContext";
import PrivetHeader from "../../layouts/header/PrivetHeader";
import Service from "../../layouts/center/Service";
import About from "../../layouts/center/About";

const UserHome = () => {
  const { user } = useAuth();
  
  return (
    <div>
      <PrivetHeader />
      <Service />
      <About />
    </div>
  );
};

export default UserHome;
