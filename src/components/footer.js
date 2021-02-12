import React from "react";
import logo from "../assets/logo.svg";
import twitter from "../assets/icon-twitter.svg";
import facebook from "../assets/icon-facebook.svg";
import pinterest from "../assets/icon-instagram.svg";
import instagram from "../assets/icon-pinterest.svg";

const footer = () => {
  return (
    <footer>
      <div className="footer-center">
        <img src={logo} className="footer-logo" alt="logo" />
        <ul className="links">
          <h3>Features</h3>
          <li>
            <a href="/" className="link">
              Link Shortening
            </a>
          </li>
          <li>
            <a href="/" className="link">
              branded links
            </a>
          </li>
          <li>
            <a href="/" className="link">
              analytics
            </a>
          </li>
        </ul>
        <ul className="links">
          <h3>Features</h3>
          <li>
            <a href="/" className="link">
              Link Shortening
            </a>
          </li>
          <li>
            <a href="/" className="link">
              branded links
            </a>
          </li>
          <li>
            <a href="/" className="link">
              analytics
            </a>
          </li>
        </ul>
        <ul className="links">
          <h3>Features</h3>
          <li>
            <a href="/" className="link">
              Link Shortening
            </a>
          </li>
          <li>
            <a href="/" className="link">
              branded links
            </a>
          </li>
          <li>
            <a href="/" className="link">
              analytics
            </a>
          </li>
        </ul>
        <div className="social-icons">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </footer>
  );
};

export default footer;
