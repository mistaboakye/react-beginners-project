// this is a named export so when importing
//so when importing it into a component
// its supposed to imported with {}
//best place to import a an image

import Mercedes from "./images/mercedes.jpg";
import BMW from "./images/BMW.jpg";
import Jaguar from "./images/jaguar.jpg";
import Benz from "./images/Benz.jpg";
import Range from "./images/range.jpg";
import Toyota from "./images/toyota.jpg";

const id = 10 * Math.random();
export const cars = [
  {
    id,
    carName: "Mercedes",
    carModel: "2014",
    img: Mercedes,
    price: "$15,000",
  },
  { id, carName: "BMW", carModel: "2016", img: BMW, price: "$25,000" },
  { id, carName: "Jaguar", carModel: "2019", img: Jaguar, price: "$25,000" },
  { id, carName: "Benz", carModel: "2014", img: Benz, price: "$8,000" },
  {
    id,
    carName: "Range Rover",
    carModel: "2018",
    img: Range,
    price: "$83,000",
  },
  {
    id,
    carName: "Toyota Skylight",
    carModel: "2015",
    img: Toyota,
    price: "$67,000",
  },
];
