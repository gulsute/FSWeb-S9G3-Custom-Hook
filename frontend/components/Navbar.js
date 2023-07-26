import React from "react";
import usegeceModu from "../hooks/geceModuAc";

const Navbar = () => {
  /*   const [geceModu, ] = usegeceModu;
   */ const toggleMode = (e) => {
    e.preventDefault();
    props.setGeceModu(!props.geceModu);
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={geceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
