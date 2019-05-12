import React, { Component } from "react";
import { Link } from "react-router-dom";
import uuid from "uuid";

import Aimient from "../images/aimient.png";
import Jac9ja from "../images/jac9ja.png";
import Shoot from "../images/shoot.png";
import Yettifood from "../images/yettifood.png";
import Shopify from "../images/shopify.png";
import Fylo from "../images/fylo.png";

import ProjectItems from "../components/ProjectItems";
import Header from "../layout/Header";

export default class Home extends Component {
  state = {
    projects: [
      {
        id: uuid.v4(),
        img: Aimient,
        name: "Aimient",
        tagline: "A recruiting company"
      },
      {
        id: uuid.v4(),
        img: Jac9ja,
        name: "Jac9ja",
        tagline: "A blogging website"
      },
      {
        id: uuid.v4(),
        img: Shoot,
        name: "Shoot Technologies",
        tagline: "A photography startup"
      },
      {
        id: uuid.v4(),
        img: Yettifood,
        name: "Yettifood",
        tagline: "A food blog website"
      },
      {
        id: uuid.v4(),
        img: Shopify,
        name: "Shopify",
        tagline: "A jewelry store"
      },
      {
        id: uuid.v4(),
        img: Fylo,
        name: "Fylo",
        tagline: "A landing page"
      }
    ]
  };

  render() {
    return (
      <div>
        <Header
          heading="I develop websites that help small businesses grow and in a position to succeed"
          subheading="Front End Development"
        >
          <button className="btn">
            <Link to="/services">LET'S WORK TOGETHER</Link>
          </button>
        </Header>

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
                  key={project.id}
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
