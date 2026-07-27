import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./../../Index.css";
import { useAuth } from "../../context/AuthContext";
import Header from "../../layouts/header/Header"

const UserLogin = () => {
  const nav = useNavigate();
  const { findUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/api/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      await findUser();
      // alert("Login Successful");
      nav("/user");
    } catch (err) {
      console.log(err);

      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Header />
      <div className="bg-gray-300 w-full overflow-hidden">
        <div className="relative mx-auto min-h-[950px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url("images/form2.jpg")`,
            }}
          />

          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative max-w-[750px] mx-auto px-6 py-12">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 p-20 gap-5 mt-30 justify-items-center bg-white/90 rounded-2xl shadow-black"
            >
              <h1 className="text-blue-400 font-extrabold text-3xl nav-shadow">
                User Login
              </h1>

              <input
                className="input2"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <p className="text-red-600 -mt-4">{errors.email}</p>

              <input
                className="input2"
                type="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <p className="text-red-600 -mt-4">{errors.password}</p>

              <button
                type="submit"
                disabled={loading}
                className="justify-center bg-blue-800 text-white font-bold mt-8 min-w-[400px] max-w-md min-h-[60px] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:text-xl disabled:opacity-50"
              >
                {loading ? "Logging In..." : "Log In"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
