import React from "react";
import { useState } from "react";
export default function Main() {
  const [location, setLoction] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [avarage, setAvarage] = useState("");
  const [flage, setFlage] = useState(false);
  const handelSubmit = (e) => {
    e.preventDefault();
    setLoction(e.target.location.value);
    setMinimum(e.target.minimum.value);
    setMaximum(e.target.maximum.value);
    setAvarage(e.target.avarage.value);
    setFlage(true);
  };
  return (
    <>
      <div className="h-48 bg-emerald-300 w-4/6 mt-8 ml-56 mr-64 rounded-lg">
        <p className="text-xl text-center pt-3 font-bold">
          Create Cookie Stand
        </p>
        <form onSubmit={handelSubmit}>
          <div className="flex w-full p-4">
            <label>Location</label>
            <input
              type="text"
              name="location"
              className="w-full bg-indigo-100"
            />
          </div>
          <div className="flex w-full p-4 justify-between">
            <div className="col">
              <label>Minimum Customers per Hour</label>
              <input type="text" name="minimum" />
            </div>
            <div className="col">
              <label>Maximum Customers per Hour</label>
              <input type="text" name="maximum" />
            </div>
            <div className="col">
              <label>Avarage Cookie per Sale</label>
              <input type="text" name="avarage" />
            </div>
            <button className="w-40 bg-emerald-500">Create</button>
          </div>
        </form>
      </div>
      <p className="text-center p-10"> Report Table Coming Soon...</p>
      {flage && (
        <div className="text-center p-10">
          <p>
            {`{ "location" :"${location}", "minCustomers": "${minimum}", "maxCustomers":${maximum},
            "avgCookies":${avarage}`}
          </p>
        </div>
      )}
    </>
  );
}
