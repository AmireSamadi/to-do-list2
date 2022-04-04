import React from "react";
import { NavLink, Link } from "react-router-dom";

const Nav = (props) => {
  console.log(props);
  return (
    <div className="mt-3 ">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item mx-3  ">
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                backgroundColor: isActive ? "#685159" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>

        <li className="nav-item mx-3">
          <NavLink
            to="/about"
            className="nav-link"
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                backgroundColor: isActive ? "#685159" : "",
              };
            }}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
