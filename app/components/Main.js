import React from "react";
import { useState } from "react";
import ReportTable from "./ReportTable";
import { hourlySales } from "../../data";
export default function Main({ show }) {
  const [location, setLoction] = useState("");
  const [minimum, setMinimum] = useState("");
  const [maximum, setMaximum] = useState("");
  const [avarage, setAvarage] = useState("");
  const [flag, setFlag] = useState(true);
  const [stores, setStores] = useState([]);

  function totalDay(arr) {
    let total = 0;
    arr.forEach((number) => (total += number));
    return total;
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      !e.target.location.value ||
      !e.target.minimum.value ||
      !e.target.maximum.value ||
      !e.target.avarage.value
    ) {
      return;
    }

    setLoction(e.target.location.value);
    setMinimum(e.target.minimum.value);
    setMaximum(e.target.maximum.value);
    setAvarage(e.target.avarage.value);
    setFlag(true);
    let arr = hourlySales();
    console.log(location);

    let data = {
      id: location.length + 1,
      Location: e.target.location.value,
      hourlySales: arr,
      total: totalDay(arr),
    };

    setStores([...stores, data]);
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

      {flag && show && (
        <div className="text-center p-10 overflow-auto	">
          {/* <p>
            {`{ "location" :"${location}", "minCustomers": "${minimum}", "maxCustomers":${maximum},
            "avgCookies":${avarage}`}
          </p> */}
          {!stores.length ? (
            <h2>No Cookie Stands Available</h2>
          ) : (
            <ReportTable stores={stores} />
          )}
        </div>
      )}
    </>
  );
}
