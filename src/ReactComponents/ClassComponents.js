import React from "react";
import ReactDOM from "react-dom/client";

const car = "Toyota a new model";
const shifter = 5;
const torender = (
  <h1> {shifter > 0 ? "Toyota a new model" : "Toyota the old model"}</h1>
);
class Car extends React.Component {
  render() {
    return torender;
  }
}
export default Car;
