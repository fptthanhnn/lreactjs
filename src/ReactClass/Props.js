import React from "react";
import ReactDOM from "react-dom/client";
//Another way to handle components properties
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />);
