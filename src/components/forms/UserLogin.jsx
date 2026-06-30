import React, { useActionState } from "react";
import "./../../Index.css";

const UserLogin = () => {
  const handleSubmit = (prevData, formData) => {
    const error = {};
    let name = formData.get("userName");
    let email = formData.get("email");
    let password = formData.get("password");

    if (name.length < 3 || name.length > 10) {
      error.name = "Invalide Name!";
    } else if (email.length === 0) {
      error.email = "Invalide email!";
    } else if (password.length === 0) {
      error.password = "Inavlide Password!";
    }
    if (Object.keys(error).length > 0) {
      return { error, value: { name, email, password } };
    }
    return { message: "suscess", value: { name: "", email: "", password: "" } };
  };

  const [data, action, pending] = useActionState(handleSubmit);
  console.log(data);
  // const handleChange = (e) => {
  //   // console.log(e.target.value);
  // };
  return (
    <>
      <div className="bg-gray-300 w-full  overflow-hidden">
        <div className="relative mx-auto min-h-[950px]  origin-center shadow-md overflow-hidden hover:shadow-xl transition-all  ">
          <div
            className="absolute inset-0 bg-cover bg-center  "
            style={{ backgroundImage: `url(${"images/form2.jpg"})` }}
          />
          <div className="absolute inset-0 bg-cover p-30 bg-black/70"></div>
          <div className="relative  max-w-[750px]  mx-auto px-6 md:px-10 lg:px-12 py-12">
            <form
              action={action}
              onSubmit={handleSubmit}
              className="grid grid-cols-1  h-auto mx-auto p-25 gap-5 mt-30   justify-items-center bg-white/90 rounded-2xl shadow-black"
            >
              <h1 className="text-blue-400 font-extrabold text-3xl nav-shadow">
                UserLogin
              </h1>
              <input
                className="input2 "
                defaultValue={data?.value?.name}
                // onChange={handleChange}
                name="userName"
                placeholder="Enter Your Name"
                id="userName"
              />
              <p className="  -mt-5  text-red-700">{data?.error?.name}</p>

              <input
                className="input2 "
                defaultValue={data?.value?.email}
                // onChange={handleChange}
                name="email"
                type="email"
                placeholder="Enter your Email"
                id="email"
              />
              <p className="  -mt-5  text-red-700">{data?.error?.email}</p>

              <input
                className="input2 "
                defaultValue={data?.value?.password}
                // onChange={handleChange}
                name="password"
                type="password"
                placeholder="Enetr Your Password"
              />
              <p className="  -mt-5  text-red-700">{data?.error?.password}</p>
              <button className="justify-center bg-blue-800 text-white font-bold mt-8  min-w-[400px] max-w-md  min-h-[60px] rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:text-xl">
                Log in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
