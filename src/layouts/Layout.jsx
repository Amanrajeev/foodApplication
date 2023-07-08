import React from "react";
import Navbar from "./Navbar/Navbar";
import "./Layout.scss";

function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout__contents">
        <div className="">Food Items</div>
      </div>
    </div>
  );
}

export default Layout;
