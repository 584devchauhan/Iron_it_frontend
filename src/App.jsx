// import HandaleNav from "./Layouts/header/HandaleNav";
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
import UserSingin from "./components/forms/UserSingin";
import ContectUs from "./layouts/center/ContectUs";

function App() {
  const loction = useLocation();

  const hideElement = ["/user_login", "/user_singin"];

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
          <Route path="/user_singin" element={<UserSingin />} />
          <Route path="/contact-us" element={<ContectUs />} />
        
      </Routes>

      {/* Footer */}
      {!hideElement.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
