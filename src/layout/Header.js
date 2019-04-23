import React from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";

export default function Header(props) {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" />
        <ul className="menu">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          {/* <li>
            <NavLink to="/articles">Articles</NavLink>
          </li> */}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <section className="header-text">
        <h1 className="heading">{props.heading}</h1>
        <h4>{props.subheading}</h4>
      </section>
    </header>
  );
}
