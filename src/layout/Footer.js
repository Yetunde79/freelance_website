import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";

export default function Footer() {
  return (
    <footer>
      <div className="grid">
        <div>
          <a href="/">
            <img src={require("../images/logo.png")} alt="logo" />
          </a>
          <p>ysolaadebayo@gmail.com</p>
        </div>

        <div>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/working-with-me"> WORKING WITH ME</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            {/* <li>
              <Link to="/articles">ARTICLES</Link>
            </li> */}
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <ul>
            <li>
              <a id="li" href="https://www.linkedin.com/in/yetundeadebayo/">
                <i className="fab fa-linkedin-in fa-2x" />
              </a>
            </li>
            <li>
              <a id="medium" href="https://medium.com/@ysolaadebayo">
                <i className="fab fa-medium-m fa-2x" />
              </a>
            </li>
            <li>
              <a id="github" href="https://github.com/Yetunde79">
                <i className="fab fa-github fa-2x" />
              </a>
            </li>
            <li>
              <a id="twitter" href="https://twitter.com/yetunde_sola">
                <i className="fab fa-twitter fa-2x" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p id="made_by">
        Made with <i className="fas fa-heart" id="heart" /> by Yetunde
      </p>
    </footer>
  );
}
