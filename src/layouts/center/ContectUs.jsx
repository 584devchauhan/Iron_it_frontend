import React from "react";

const ContectUs = () => {
  return (
    <>
    
      <div className="relative h-[420px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("images/contect.jpg")`,
          }}
        ></div>

        <div className="relative z-10 h-full max-w-[1280px] mx-auto flex items-center px-8">
          <div>
            <h1 className="text-7xl font-extrabold text-white mb-5">
              Contact Us
            </h1>

            <p className="text-2xl text-white font-semibold">
              For the Best Service |
            </p>
          </div>
        </div>
      </div>

      {/* send message  */}

      <div className="bg-gray-300 py-20">
        <div className="max-w-[1280px] mx-auto flex gap-6">
          {/* Left Image */}
          <div className="w-[25%] pt-15">
            <div className="h-[650px] overflow-hidden shadow-lg">
              <img
                src="images/message.jpg"
                alt="Laundry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form */}
          <div className="w-[50%] bg-white shadow-lg p-10">
            <h2 className="text-5xl font-bold text-blue-900 mb-5">
              Send us a message
            </h2>

            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Fill out the form below.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border p-3 mt-2 rounded"
                />
              </div>

              <div>
                <label className="font-semibold">Phone</label>
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border p-3 mt-2 rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 mt-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="font-semibold">Subject</label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-3 mt-2 rounded"
              />
            </div>

            <div className="mb-6">
              <label className="font-semibold">Message</label>
              <textarea
                rows={5}
                placeholder="Message"
                className="w-full border border-blue-300 p-3 mt-2 rounded resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-blue-600 text-white py-4 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>

          {/* Contact Info */}
          <div className="w-[25%] h-[700px] mt-7 bg-white shadow-lg p-10 flex flex-col">
            <h2 className="text-4xl font-bold text-blue-900 mb-8">
              Contact Info
            </h2>

            <div className="space-y-6 text-gray-700">
              <p>📍 123 Laundry Street, Surat, Gujarat</p>

              <p>📧 support@cleanox.com</p>

              <p>📞 +91 123-123-1234</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContectUs;
