import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Children } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const findUser = async () => {
    try {
      const res = await axios.get("http://localhost:5000/auth/api/profile", {
        withCredentials: true,
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      setUser(res.data.user);
    } catch (err) {
      console.log(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    findUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser, findUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
