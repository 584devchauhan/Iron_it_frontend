import React, { useActionState } from "react";
import bgImage from "./../../../public/images/form.jpg";
import "./../../Index.css";

const UserSingin = () => {
  const handleSubmit = (prevData, formData) => {
    const error = {};
    let name = formData.get("userName") || "";
    let email = formData.get("email") || "";
    let password = formData.get("password") || "";
    let address = formData.get("address") || "";

    if (name.length < 3 || name.length > 20) {
      error.name = "Invalid Name!";
    } else if (email.length === 0) {
      error.email = "Invalid email!";
    } else if (password.length === 0) {
      error.password = "Invalid password!";
    } else if (address.length === 0) {
      error.address = "Invalid address!";
    }
    if (Object.keys(error).length > 0) {
      return { error, value: { name, email, password, address } };
    }
    return {
      message: "Success",
      value: { name: "", email: "", password: "", address: "" },
    };
  };
  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  const [data, action, pending] = useActionState(handleSubmit);

  return (
    <div className="bg-gray-300 w-full overflow-hidden">
      <div className="relative mx-auto origin-center min-h-[945px] shadow-md overflow-hidden hover:shadow-xl transition-all   ">
        <div
          className="absolute inset-0 bg-cover bg-center "
          style={{ backgroundImage: `url(${"images/form2.jpg"})` }}
        />
        <div className="absolute inset-0 bg-cover p-40 bg-black/70"></div>

        <div className="relative  max-w-[800px] px-6 md:px-10 lg:px-12 py-10 mx-auto ">
          <form
            action={action}
            // onSubmit={handleSubmit}
            className="grid grid-cols-1  h-auto mx-auto p-25 gap-5 mt-30   justify-items-center bg-white/90 rounded-2xl shadow-black"
          >
            <h1 className="text-blue-400 font-extrabold text-3xl nav-shadow">
              UserSingin
            </h1>
            <input
              className="input2 "
              defaultValue={data?.value?.name}
              // onChange={handleChange}
              type="text"
              name="userName"
              placeholder="Enter Your Name"
              id="userName"
            />
            <p className="text-red-700 -mt-5 ">{data?.error?.name}</p>
            <input
              className="input2 "
              defaultValue={data?.value?.email}
              // onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your Email"
              id="email"
            />
            <p className="text-red-700 -mt-5">{data?.error?.email}</p>

            <input
              className="input2 "
              defaultValue={data?.value?.password}
              // onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Enetr Your Password"
            />
            <p className="text-red-700 -mt-5">{data?.error?.password}</p>

            <input
              className="input2 "
              defaultValue={data?.value?.address}
              type="address"
              // onChange={handleChange}
              name="address"
              id="address"
              placeholder="Enter Your Address"
            />
            <p className="text-red-700 -mt-5">{data?.error?.address}</p>
            <button className="justify-center bg-blue-800 text-white font-bold mt-8  min-w-[400px] max-w-md min-h-[60px] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:text-xl">
              Sing in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSingin;
