import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/travel logo.png";

const Header = () => {
  return (
    <nav>
      <ul>
        <img src={logo} alt="" />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/SearchList">About</Link>
        </li>
        <li>
          <Link to="/tours">Tours</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register" className="button">
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
