import { Route, Router, Routes, useLocation } from "react-router-dom";
import "./Index.css";
import BookNow from "./components/forms/BookNow";
import BuyPrimium from "./components/forms/BuyPrimium";
import Footer from "./Layouts/footer/Footer";
import Home from "./layouts/center/Home";
import Service from "./layouts/center/Service";
import About from "./layouts/center/About";
import UserLogin from "./components/forms/UserLogin";
import ContectUs from "./layouts/center/ContectUs";
import { useEffect } from "react";
import axios from "axios";
import UserSingUp from "./components/forms/UserSingUp";
import LogOut from "./components/buttons/LogOut";
import UserHome from "./pages/auth/UserHome";
import ProtectedRoutes from "./assets/ProtectedRoutes";
import PublicRoutes from "./assets/PublicRoutes";
import GetPrimium from "./pages/GetPrimium";
import socket from "./socket";
import { useAuth } from "./context/AuthContext";
import MyOrders from "./pages/MyOrders";

function App() {
  const location = useLocation();
  const { user } = useAuth();

  useEffect(() => {
    axios.get("http://localhost:5000/").then((res) => {
      console.log("connected");
      // console.log(data);
    });
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
      if (user && user._id) {
        socket.emit("registerUser", user._id);
      }
    });

    if (user && user._id && socket.connected) {
      socket.emit("registerUser", user._id);
    }

    return () => {
      socket.off("connect");
    };
  }, [user]);
  const hideElement = [
    "/user_login",
    "/user_singup",
    "/book-now",
    "/buy-primium",
    "/my-orders",
  ];

  return (
    <>
      <Routes>
        <Route path="/logout" element={<LogOut />} />
        <Route path="/logout" element={<LogOut />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/user_singup" element={<UserSingUp />} />
        {/* <Route element={<PublicRoutes />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContectUs />} />
        {/* </Route> */}

        {/* Protecte Routes  */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/buy-primium" element={<GetPrimium />} />
          <Route path="/learn-more" element={<BuyPrimium />} />
          <Route path="/book-now" element={<BookNow />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/user" element={<UserHome />} />
        </Route>
      </Routes>

      {/* Footer */}
      {!hideElement.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
