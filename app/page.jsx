"use client";
import { Inter } from "@next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useContext, useState } from "react";
import ThemeWrapper from "./components/theme";
import AuthWrapper, { AuthContext } from "./components/auth";
import LoginForm from "./components/LoginForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [toggle, setToggle] = useState(true);
  const { token } = useContext(AuthContext);
  const showData = () => {
    setToggle(!toggle);
  };

  return (
    <ThemeWrapper>
      <Header showData={showData} />
      {token ? <Main show={toggle} /> : <LoginForm />}
      <Footer />
    </ThemeWrapper>
  );
}
