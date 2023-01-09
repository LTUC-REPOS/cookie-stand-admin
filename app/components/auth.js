"use client";
import { createContext, useState } from "react";
import axios from "axios";
export const AuthContext = createContext();

export function AuthWrapper({ children }) {
  const [globalState, SetGlobalState] = useState({
    token: localStorage.getItem("token"),
    login,
    logout,
  });

  async function login(userInfo) {
    const url = "https://cookie-w-a.herokuapp.com/api/token/";
    const res = await axios.post(url, userInfo);
    console.log(res.data);
    SetGlobalState({
      token: res.data,
      login,
      logout,
    });

    localStorage.setItem("token", res.data);
  }

  async function logout() {
    SetGlobalState({
      token: null,
      login,
    });

    localStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={globalState}>{children}</AuthContext.Provider>
  );
}
