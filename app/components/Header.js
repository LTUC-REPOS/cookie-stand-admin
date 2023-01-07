import React, { useContext } from "react";
import { ThemeContext } from "./theme";
export default function Header({ showData }) {
  const toggleData = () => {
    showData();
  };
  const { isDarkTheme, toggleThemeHandler } = useContext(ThemeContext);
  console.log(useContext(ThemeContext));
  return (
    <header className=" dark:text-white dark:bg-black flex justify-between px-8 p- bg-emerald-500 dark:bg-black dark:text-white">
      <h1 className=" dark:text-white dark:bg-black text-2xl">
        Cookie Stand Admin
      </h1>

      <div>
        <button
          onClick={toggleData}
          className=" dark:text-white dark:bg-black w-24 m-4 ml-20 text-center rounded-md bg-slate-200"
        >
          Overview
        </button>
        <button
          className=" dark:text-white dark:bg-black w-24 m-4 ml-20 text-center rounded-md bg-slate-200"
          onClick={toggleThemeHandler}
        >
          darkMode
        </button>
      </div>
    </header>
  );
}
