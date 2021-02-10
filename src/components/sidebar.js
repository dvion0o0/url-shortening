import React from "react";
import { AppContext } from "../contextapi/context";

const Sidebar = () => {
  const { show } = React.useContext(AppContext);
  console.log(show);
  return (
    <aside className={`${show ? "sidebar show-sidebar" : "sidebar"}`}>
      <ul className="side-links">
        <li>
          <a href="/">Features</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Resources</a>
        </li>
      </ul>
      <div className="underline"></div>
      <div>
        <button className="btn">Login</button>
        <button className="btn sign-btn">sign up</button>
      </div>
    </aside>
  );
};

export default Sidebar;
