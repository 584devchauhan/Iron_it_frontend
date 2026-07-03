import { Route, Router, Routes, useLocation } from "react-router-dom";
import "./Index.css";
import Header from "./Layouts/header/Header";
import BookNow from "./components/forms/BookNow";
import BuyPrimium from "./components/forms/BuyPrimium";
import Footer from "./Layouts/footer/Footer";
import Home from "./layouts/center/Home";
import Service from "./layouts/center/Service";
import About from "./layouts/center/About";
import UserLogin from "./components/forms/UserLogin";
import UserSingin from "./components/forms/UserSingUp";
import ContectUs from "./layouts/center/ContectUs";
import { useEffect } from "react";

function App() {
  const loction = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.text)
      .then((data) => console.log(data));
  }, []);

  const hideElement = ["/user_login", "/user_singin","/book-now","/buy-primium"];

  return (
    <>
      <Header />
      <Routes>
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/buy-primium" element={<BuyPrimium />} />
        <Route path="/learn-more" element={<BuyPrimium />} />
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/user_login" element={<UserLogin />} />
        <Route path="/user_singup" element={<UserSingin />} />
        <Route path="/contact-us" element={<ContectUs />} />
      </Routes>

      {/* Footer */}
      {!hideElement.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
