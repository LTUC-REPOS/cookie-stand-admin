import { openHours } from "../../data";

export default function ReportTable({ stores }) {
  function totalhourlySales(stores) {
    let totalSales = [];
    for (let i = 0; i < openHours.length; i++) {
      let sales = 0;
      stores.map((item) => {
        sales += item.hourlySales[i];
      });
      totalSales[i] = sales;
    }
    return totalSales;
  }

  function getTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }

    return total;
  }
  let grandTotal = getTotal(totalhourlySales(stores));

  if (stores.length == 0) {
    return (
      <h2 className=" dark:text-white dark:bg-black w-1/2 mx-auto my-8 text-4xl text-center">
        No Cookie Stands Available
      </h2>
    );
  } else {
    return (
      <table className=" dark:text-white dark:border-white dark:bg-black w-1/2 mx-auto my-4 border-2 p-4 m-21.5">
        <thead>
          <tr className=" dark:text-white dark:bg-black bg-emerald-500">
            <th className=" dark:text-white dark:bg-black rounded-tl-lg">
              Location
            </th>
            {openHours.map((item) => {
              return <th key={item}>{item}</th>;
            })}
            <th className=" dark:text-white dark:bg-black rounded-tr-lg">
              Total
            </th>
          </tr>
        </thead>

        <tbody className="p-2 dark:border-white">
          {stores.map((item, index) => {
            console.log(item);
            return (
              <tr
                className=" dark:text-white dark:bg-black even:bg-emerald-200 odd:bg-emerald-400 dark:border-white"
                key={index}
              >
                <td className=" dark:text-white dark:bg-black p-2 border border-black dark:border-white">
                  {item.Location}
                </td>

                {item.hourlySales.map((int, index) => (
                  <td
                    key={index}
                    className=" dark:text-white dark:bg-black p-2 border border-black dark:border-white"
                  >
                    {int}
                  </td>
                ))}
                <td className=" dark:text-white dark:bg-black p-4 border border-black dark:border-white">
                  {item.total}
                </td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <th className=" dark:text-white dark:bg-black p-2 font-bold border border-black bg-emerald-600 dark:border-white">
            Totals
          </th>
          {totalhourlySales(stores).map((item, idx) => (
            <th
              key={idx}
              className=" dark:text-white dark:bg-black p-2 border border-black bg-emerald-600"
            >
              {item}
            </th>
          ))}
          <th className=" dark:text-white dark:bg-black p-2 border border-black bg-emerald-600">
            {grandTotal}
          </th>
        </tfoot>
      </table>
    );
  }
}
