import React from "react";
import logo from "../assets/logo.svg";
import { GoThreeBars } from "react-icons/all";
import { AppContext } from "../contextapi/context";

const Navbar = () => {
  const { toggle } = React.useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="section-center nav-center">
        <img src={logo} alt="logo" />
        <GoThreeBars className="toggle" onClick={toggle} />
      </div>
    </nav>
  );
};

export default Navbar;
