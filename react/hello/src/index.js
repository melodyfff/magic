import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RouterApp from "./router";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
// mock api数据，全局使用
import './mock/users'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <BrowserRouter>
    <RouterApp />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
