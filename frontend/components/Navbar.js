import React from "react";
import usegeceModu from "../hooks/useGeceModu.js";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={props.setGeceModu}
          className={props.geceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
