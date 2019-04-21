import React from "react";
import "../stylesheets/App.scss";

export default function Footer() {
  return (
    <footer>
      <div className="grid">
        <div>
          <img src={require("../images/logo.png")} alt="logo" />
          <p>ysolaadebayo@gmail.com</p>
        </div>

        <div>
          <ul>
            <li>HOME</li>
            <li>PROJECTS</li>
            <li>SERVICES</li>
            <li>ARTICLES</li>
            <li>CONTACT</li>
          </ul>
        </div>

        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-medium-m" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p id="made_by">Made with 3 by Yetunde</p>
    </footer>
  );
}
