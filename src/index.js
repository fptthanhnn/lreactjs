import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const element1 = (
  <div>
    <p color="yellow">Try to enter new element</p>
    <a href="html_css.js">Try redirect not sure if it work</a>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <App />
    {element1}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
