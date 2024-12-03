import React from "react";
import ReactDOM from "react-dom/client";

//Components can be pass as props
function Car(props) {
  return <h1> I am a {props.color} Car!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="Pink" />);
