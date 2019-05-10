import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../images/logo.png";
import Aimient from "../images/aimient.png";
import Jac9ja from "../images/jac9ja.png";
import Shoot from "../images/shoot.png";
import Yettifood from "../images/yettifood.png";
import Shopify from "../images/shopify.png";
import Fylo from "../images/fylo.png";

import ProjectItems from "../components/ProjectItems";

export default class Home extends Component {
  state = {
    windowWidth: window.innerWidth,
    mobileNavVisible: false,
    projects: [
      {
        img: Aimient,
        name: "Aimient",
        tagline: "A recruiting company"
      },
      {
        img: Jac9ja,
        name: "Jac9ja",
        tagline: "A blogging website"
      },
      {
        img: Shoot,
        name: "Shoot Technologies",
        tagline: "A photography startup"
      },
      {
        img: Yettifood,
        name: "Yettifood",
        tagline: "A food blog website"
      },
      {
        img: Shopify,
        name: "Shopify",
        tagline: "A jewelry store"
      },
      {
        img: Fylo,
        name: "Fylo",
        tagline: "A landing page"
      }
    ]
  };

  handleResize = () => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  navigationlink = () => {
    return [
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
    ];
  };

  renderMobileNav = () => {
    if (this.state.mobileNavVisible) {
      return this.navigationlink();
    }
  };

  handleNavLink = () => {
    if (!this.state.mobileNavVisible) {
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
  };

  renderNavigation = () => {
    if (this.state.windowWidth <= 500) {
      return [
        <div className="mobilemenu">
          {this.renderMobileNav()}
          <i className="fas fa-bars hamburger" onClick={this.handleNavLink} />
        </div>
      ];
    } else {
      return [<div>{this.navigationlink()}</div>];
    }
  };

  render() {
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
            {this.renderNavigation()}
          </nav>
          <div className="header-text">
            <h1 className="heading">{header.heading}</h1>
            <h4>{header.subheading}</h4>

            <button className="btn">
              <Link to="/services">LET'S WORK TOGETHER</Link>
            </button>
          </div>
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

          <section className="projects featured centered">
            <h3>Featured Projects</h3>
            <div className="grid">
              {this.state.projects.map(project => (
                <ProjectItems
                  img={project.img}
                  name={project.name}
                  tagline={project.tagline}
                />
              ))}
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
                      Yetunde did a great job of helping me design and develop
                      our company's website. She was well organized and quick to
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
                        our company's website. She was well organized and quick
                        to respond to asks and changes.
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
}
