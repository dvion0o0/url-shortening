import React from "react";
import logo from "../assets/logo.svg";
import { GoThreeBars } from "react-icons/all";
import { AppContext } from "../contextapi/context";

const Navbar = () => {
  const { toggle } = React.useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="section-center nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <ul className="nav-links">
            <li>
              <a href="/" className="nav-link">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <GoThreeBars className="toggle" onClick={toggle} />
        <div className="nav-btns">
          <button className="nav-btn">login</button>
          <button className="nav-btn sign-btn">sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
