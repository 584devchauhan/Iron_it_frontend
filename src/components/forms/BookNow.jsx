import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const BookNow = () => {
  const [service, setService] = useState("");
  const [services, setServices] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [payment, setPayment] = useState("COD");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/place/order");

        setServices(res.data.services);
      } catch (err) {
        console.log(err);
      }
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!service || !quantity || !address || !pickupDate || !payment) {
      alert("Please fill all the fields.");
      return;
    }

    const order = {
      service,
      quantity,
      address,
      pickupDate,
      payment,
    };

    console.log(order);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/order/create-order",
        order,
        {
          withCredentials: true,
        },
      );

      alert(res.data.message);

      setService("");
      setQuantity("");
      setAddress("");
      setPickupDate("");
      setPayment("COD");
    } catch (err) {
      console.log(err);
      alert("Failed to place order");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("images/primium.jpg")`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center py-16 px-5">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-10">
          <h1 className="text-4xl font-extrabold text-[#032B56] text-center">
            Book Laundry Service
          </h1>

          <p className="text-gray-500 text-center mt-2 mb-8">
            Fill in the details below to schedule your laundry pickup.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service */}
            <div>
              <label className="block text-[#032B56] font-semibold mb-2">
                Select Service
              </label>

              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select Service</option>

                {services.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name} - ₹{item.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-[#032B56] font-semibold mb-2">
                Number of Clothes
              </label>

              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Pickup Address */}
            <div>
              <label className="block text-[#032B56] font-semibold mb-2">
                Pickup Address
              </label>

              <textarea
                rows="3"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter pickup address"
                className="w-full border rounded-xl p-3 outline-none resize-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-[#032B56] font-semibold mb-2">
                Pickup Date
              </label>

              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Payment Method */}
            <div>
              <label className="block text-[#032B56] font-semibold mb-2">
                Payment Method
              </label>

              <select
                value={payment}
                onChange={(e) => setPayment(e.target.value)}
                className="w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="COD">Cash On Delivery</option>
                <option value="ONLINE">Online Payment</option>
              </select>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#032B56] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#05407d] transition duration-300"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
