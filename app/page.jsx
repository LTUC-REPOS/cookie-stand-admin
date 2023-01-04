"use client";
import { Inter } from "@next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [toggle, setToggle] = useState(true);

  const showData = () => {
    setToggle(!toggle);
  };

  return (
    <div className="bg-indigo-100">
      <Header showData={showData} />
      <Main show={toggle} />
      <Footer />
    </div>
  );
}
