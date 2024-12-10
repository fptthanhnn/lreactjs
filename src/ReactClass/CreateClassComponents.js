import React from "react";
import ReactDOM from "react-dom/client";
class Car extends React.Component {
  render() {
    return <h2>Hi, I am car !</h2>;
  }
}
//Display
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
