import React from "react";
export default function Footer() {
  return (
    <div className=" dark:text-white dark:bg-black flex bg-emerald-500 items-center pl-1 w-full text-center">
      <img
        src="/copyrightlogo.png"
        alt="img"
        className=" dark:text-white dark:bg-black  w-2 h-2 mt-2 bg-emerald-500"
      />
      <p
        className=" dark:text-white dark:bg-black dark:text-white dark:bg-black w-full text-3xl justify-between items-center items-center p-10 text-center
      "
      >
        All rights reserved 2023{" "}
      </p>
    </div>
  );
}
