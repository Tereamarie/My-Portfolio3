import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import SideBar from "./components/sidebar";
import About from "./components/about.js";
export default function App() {
  return (
    <div id="App">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <About />
      <div id="page-wrap"></div>
    </div>
  );
}
