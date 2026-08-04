import React, { useState } from "react";
import "./../../Index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../layouts/header/Header";

const UserSingUp = () => {
  const nav = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const [error, setError] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};

    if (!name.trim()) {
      return setError({ name: "Name is required." });
    }

    if (name.trim().length < 3 || name.trim().length > 20) {
      return setError({
        name: "Name must be between 3 and 20 characters.",
      });
    }

    if (!email.trim()) {
      return setError({ email: "Email is required." });
    }

    if (!password.trim()) {
      return setError({ password: "Password is required." });
    }

    if (!address.trim()) {
      return setError({ address: "Address is required." });
    }

    setError({});

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/api/register",
        {
          name,
          email,
          password,
          address,
        },
        {
          withCredentials: true,
        },
      );

      alert(res.data.message);

      setName("");
      setEmail("");
      setPassword("");
      setAddress("");

      nav("/user");
    } catch (err) {
      console.log(err);

      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-300 w-full overflow-hidden">
        <div className="relative mx-auto origin-center min-h-[945px] shadow-md overflow-hidden hover:shadow-xl transition-all">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("images/form2.jpg")` }}
          />

          <div className="absolute inset-0 bg-cover p-40 bg-black/70"></div>

          <div className="relative max-w-[800px] px-6 md:px-10 lg:px-12 py-10 mx-auto">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 h-auto mx-auto p-25 gap-5 mt-30 justify-items-center bg-white/90 rounded-2xl shadow-black"
            >
              <h1 className="text-blue-400 font-extrabold text-3xl nav-shadow">
                User Signup
              </h1>

              <input
                className="input2"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p className="text-red-700 -mt-5">{error.name}</p>

              <input
                className="input2"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-red-700 -mt-5">{error.email}</p>

              <input
                className="input2"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-red-700 -mt-5">{error.password}</p>

              <input
                className="input2"
                type="text"
                name="address"
                placeholder="Enter Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <p className="text-red-700 -mt-5">{error.address}</p>

              <button
                type="submit"
                className="justify-center bg-blue-800 text-white font-bold mt-8 min-w-[400px] max-w-md min-h-[60px] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:text-xl"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSingUp;
