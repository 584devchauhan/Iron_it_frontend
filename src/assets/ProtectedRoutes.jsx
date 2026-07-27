import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { Navigate, Outlet, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = (prop) => {
  const { user, loading } = useAuth();
  

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/user_login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
