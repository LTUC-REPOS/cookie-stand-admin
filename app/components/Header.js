import React from "react";

export default function Header({ showData }) {
  const toggleData = () => {
    showData();
  };

  return (
    <header className="flex justify-between px-8 py-1 bg-emerald-500">
      <h1 className="text-2xl">Cookie Stand Admin</h1>
      <button
        onClick={toggleData}
        className="w-24 m-4 ml-20 text-center rounded-md bg-slate-200"
      >
        Overview
      </button>
    </header>
  );
}
