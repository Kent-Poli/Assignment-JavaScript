// import { NavLink } from "react-router-dom";
import "../Style/header.css";
import Button from "./Button";
import Links from "./Links";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo center">
          <img src="/images/Logo.svg" alt="logo" />
        </div>
        <div className="up-wrap center">
          <div className="info-wrap">
            <div className="content-wrap">
              <i className="fa-light fa-phone-volume"></i>+46 (8) 121 470 50
            </div>
            <div className="content-wrap">
              <i className="fa-light fa-envelope"></i>info@crito.com
            </div>
            <div className="content-wrap box-3">
              <i className="fa-light fa-location-dot"></i>Sveavägen 31, 111 34
              STOCKHOLM
            </div>
          </div>

          <div className="social-wrap">
            <a href="/index.html">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="/contact.html">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="down-wrap center">
          <nav id="nav1">
            <Links />
          </nav>
          <Button type="btn-yellow" width="122px" height="48px" text="Login" />
        </div>
      </div>
    </header>
  );
};

export default Header;
