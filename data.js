export const hourlySales = () => {
  return new Array(14) // array size is 10
    .fill()
    .map(() => parseInt(50 * Math.random())); // numbers from 0-50 (exclusive)
};
export const openHours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
