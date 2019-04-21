import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/logo.png";
import Footer from "../layout/Footer";

import "../stylesheets/App.scss";
import "../stylesheets/Home.scss";

export default function Home() {
  const header = {
    heading:
      "I develop websites that help small businesses grow and in a position to succeed",
    subheading: "Front End Development"
  };
  return (
    <div>
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
            <li>
              <NavLink to="/articles">Articles</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <section className="header-text">
          <h1 className="heading">{header.heading}</h1>
          <h4>{header.subheading}</h4>

          <button>
            <a href="#">LET'S WORK TOGETHER</a>
          </button>
        </section>
      </header>

      <main>
        <section className="developed centered">
          <h3>Websites developed by me are:</h3>
          <div className="grid">
            <div className="grid-items">
              <div className="developed-img">
                <img
                  src={require("../images/mobile-devices.svg")}
                  alt="phone"
                />
              </div>
              <div className="developed-text">
                <h4>Mobile Responsive</h4>
                <p>
                  Etiam imperdiet imperdiet orci. Fusce vulputate eleifend
                  sapien. Ut non enim eleifend felis pretium feugiat. Praesent
                  porttitor, nulla vitae posuere iaculis, arcu nisl dignissim
                  dolor, a pretium mi sem ut ipsum.
                </p>
              </div>
            </div>

            <div className="grid-items">
              <div className="developed-img">
                <img
                  src={require("../images/cyber-security.png")}
                  alt="phone"
                />
              </div>
              <div className="developed-text">
                <h4>Secure</h4>
                <p>
                  Etiam imperdiet imperdiet orci. Fusce vulputate eleifend
                  sapien. Ut non enim eleifend felis pretium feugiat. Praesent
                  porttitor, nulla vitae posuere iaculis, arcu nisl dignissim
                  dolor, a pretium mi sem ut ipsum.
                </p>
              </div>
            </div>

            <div className="grid-items">
              <div className="developed-img">
                <img src={require("../images/seo.svg")} alt="phone" />
              </div>
              <div className="developed-text">
                <h4>SEO Friendly</h4>
                <p>
                  Etiam imperdiet imperdiet orci. Fusce vulputate eleifend
                  sapien. Ut non enim eleifend felis pretium feugiat. Praesent
                  porttitor, nulla vitae posuere iaculis, arcu nisl dignissim
                  dolor, a pretium mi sem ut ipsum.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="featured centered">
          <h3>Featured Projects</h3>
          <div className="grid">
            <div className="centered">
              <h4>Jac</h4>
            </div>
            <div className="centered">
              <h4>Aimient</h4>
            </div>
            <div className="centered">
              <h4>Shoot tech</h4>
            </div>
            <div className="centered">
              <h4>Yettifood</h4>
            </div>
            <div className="centered">
              <h4>Shopify</h4>
            </div>
            <div className="centered">
              <h4>Fylo</h4>
            </div>
          </div>
        </section>

        <section className="testimonials centered">
          <h3>Testimonials</h3>
          <div className="grid">
            <div className="grid-container">
              <div className="grid-container-info">
                <img src={require("../images/quote.svg")} alt="quote" />
                <div className="centered">
                  <p>
                    Yetunde did a great job of helping me design and develop our
                    company's website. She was well organized and quick to
                    respond to asks and changes.
                  </p>
                  <p>Ana Agneshwar</p>
                  <p>CEO of Aimient</p>
                </div>
              </div>
            </div>

            <div>
              <div className="grid-container">
                <div className="grid-container-info">
                  <img
                    src={require("../images/quote.svg")}
                    id="quote"
                    alt="quote"
                  />
                  <div className="centered">
                    <p>
                      Yetunde did a great job of helping me design and develop
                      our company's website. She was well organized and quick to
                      respond to asks and changes.
                    </p>
                    <p>Ana Agneshwar</p>
                    <p>CEO of Aimient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
