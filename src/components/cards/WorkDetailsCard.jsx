import React from "react";

const WorkDetailsCard = () => {
  return (
    <>
    
      <div className=" max-w-[1280px] mx-auto px-10 py-10 ">
        <h1 className=" text-6xl max-w-[900px]  p-5 font-bold text-blue-900 mt-14 text-start ">
          Insight
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          <div className="bg-white max-w-[380px] rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img
              src="/images/home.jpg"
              alt="Laundry Management System"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Laundry Management System
              </h3>

              <p className="text-gray-600 leading-7">
                Developed a complete laundry management system that allows
                customers to schedule pickups, track orders, manage payments,
                and receive notifications. The platform improves operational
                efficiency and provides a seamless experience for both customers
                and administrators.
              </p>
            </div>
          </div>

          <div className="bg-white max-w-[380px] rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img
              src="/images/home2.jpg"
              alt="Fitness Tracker"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Fitness & Diet Tracker
              </h3>

              <p className="text-gray-600 leading-7">
                Built a fitness tracking application that helps users monitor
                workouts, calorie intake, and daily nutrition goals. The system
                provides personalized recommendations, progress reports, and
                interactive charts to encourage healthy lifestyle habits.
              </p>
            </div>
          </div>

          <div className="bg-white max-w-[380px] rounded-lg shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img
              src="/images/home.jpg"
              alt="Expense Tracker"
              className="w-full h-52 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                Expense Tracker App
              </h3>

              <p className="text-gray-600 leading-7">
                Designed and developed an expense management application that
                enables users to record transactions, categorize spending, and
                analyze monthly budgets. The application provides visual
                insights through charts and reports to support better financial
                planning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkDetailsCard;
