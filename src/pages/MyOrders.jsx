import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import socket from "../socket";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  CalendarDaysIcon,
  CubeIcon,
  CurrencyRupeeIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const statusColor = {
  PLACED: "bg-yellow-100 text-yellow-700",
  ACCEPTED: "bg-blue-100 text-blue-700",
  PICKED_UP: "bg-indigo-100 text-indigo-700",
  WASHING: "bg-cyan-100 text-cyan-700",
  IRONING: "bg-purple-100 text-purple-700",
  OUT_FOR_DELIVERY: "bg-orange-100 text-orange-700",
  DELIVERED: "bg-green-100 text-green-700",
};

const MyOrders = () => {
  const [search, setSearch] = useState("");
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?._id) return;
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/${user._id}/orders`,
          {
            withCredentials: true,
          },
        );
        setOrders(res.data.orders || []);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();

    // Socket.io integration for real-time order updates
    if (user?._id) {
      socket.emit("registerUser", user._id);

      const handleOrderUpdate = (updatedOrder) => {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order._id === updatedOrder._id ? updatedOrder : order,
          ),
        );
      };

      socket.on("order-updated", handleOrderUpdate);

      return () => {
        socket.off("order-updated", handleOrderUpdate);
      };
    }
  }, [user]);

  const filteredOrders = orders.filter((order) => {
    const serviceNames =
      order.items?.map((i) => i.service?.name).join(", ") || "";
    return (
      order._id.toLowerCase().includes(search.toLowerCase()) ||
      serviceNames.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="p-8">
      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
        <div>
          <h1 className="text-4xl font-bold text-[#032B56]">My Orders</h1>

          <p className="text-gray-500 mt-2">
            Track your laundry orders and check their latest status.
          </p>
        </div>

        <div className="relative w-full lg:w-96">
          <MagnifyingGlassIcon className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search order..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white rounded-xl pl-12 pr-4 py-3 shadow outline-none"
          />
        </div>
      </div>

      {/* Orders */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {filteredOrders.map((order) => {
          const serviceNames =
            order.items?.map((i) => i.service?.name).join(", ") || "N/A";
          const totalQuantity =
            order.items?.reduce((acc, i) => acc + i.quantity, 0) || 0;

          return (
            <div
              key={order._id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition"
            >
              {/* Top */}

              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-bold text-[#032B56]">
                    {order._id.slice(-6).toUpperCase()}
                  </h2>

                  <p className="text-gray-500">{serviceNames}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    statusColor[order.status]
                  }`}
                >
                  {order.status.replaceAll("_", " ")}
                </span>
              </div>

              {/* Details */}

              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <CubeIcon className="w-5 h-5 text-blue-600" />
                  <span>{totalQuantity} Clothes</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-5 h-5 text-red-500" />
                  <span>{order.pickUpAddress || "N/A"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <CalendarDaysIcon className="w-5 h-5 text-green-600" />
                  <span>
                    {order.pickupDate
                      ? new Date(order.pickupDate).toLocaleDateString()
                      : "N/A"}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CurrencyRupeeIcon className="w-5 h-5 text-purple-600" />
                  <span>₹ {order.total}</span>
                </div>
              </div>

              {/* Progress */}

              <div className="mt-8">
                <h3 className="font-semibold text-[#032B56] mb-3">
                  Order Progress
                </h3>

                <div className="flex items-center justify-between">
                  {[
                    "PLACED",
                    "ACCEPTED",
                    "PICKED_UP",
                    "WASHING",
                    "IRONING",
                    "OUT_FOR_DELIVERY",
                    "DELIVERED",
                  ].map((step, index) => {
                    const stepsArray = [
                      "PLACED",
                      "ACCEPTED",
                      "PICKED_UP",
                      "WASHING",
                      "IRONING",
                      "OUT_FOR_DELIVERY",
                      "DELIVERED",
                    ];
                    let currentIndex = stepsArray.indexOf(order.status);

                    return (
                      <div
                        key={step}
                        className="flex flex-col items-center flex-1"
                      >
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                            currentIndex >= index
                              ? "bg-[#032B56] text-white"
                              : "bg-gray-200 text-gray-500"
                          }`}
                        >
                          {index + 1}
                        </div>

                        <p className="text-[10px] text-center mt-2">
                          {step.replaceAll("_", " ")}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Payment */}

              <div className="mt-8 border-t pt-4 flex justify-between">
                <span className="font-medium text-gray-600">Payment</span>

                <span className="font-bold text-[#032B56]">
                  {order.paymentMethod || "COD"}
                </span>
              </div>

              <button className="w-full mt-6 bg-[#032B56] text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-[#05407d] transition">
                <TruckIcon className="w-5 h-5" />
                Track Order
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyOrders;
