import React, { Component } from "react";
import uuid from "uuid";
import { Link } from "react-router-dom";

import Header from "../layout/Header";
import ProjectItems from "../components/ProjectItems";

import Aimient from "../images/aimient.png";
import Jac9ja from "../images/jac9ja.png";
import Shoot from "../images/shoot.png";
import Yettifood from "../images/yettifood.png";
import Shopify from "../images/shopify.png";
import Fylo from "../images/fylo.png";

export default class Projects extends Component {
  state = {
    projects: [
      {
        id: uuid.v4(),
        img: Aimient,
        name: "Aimient",
        link: "https://aimient.com/",
        tagline: "A recruiting company"
      },
      {
        id: uuid.v4(),
        img: Jac9ja,
        name: "Jac9ja",
        link: "https://jac9ja.ng/",
        tagline: "A blogging website"
      },
      {
        id: uuid.v4(),
        img: Shoot,
        name: "Shoot Technologies",
        link: "https://condescending-williams-848ae0.netlify.com/",
        tagline: "A photography startup"
      },
      {
        id: uuid.v4(),
        img: Yettifood,
        name: "Yettifood",
        link: "http://www.yettifood.com/",
        tagline: "A food blog website"
      },
      {
        id: uuid.v4(),
        img: Shopify,
        name: "Shopify Store",
        link: "https://ljkhgfx.myshopify.com/",
        tagline: "A jewelry store"
      },
      {
        id: uuid.v4(),
        img: Fylo,
        name: "Fylo",
        link: "https://yetunde79.github.io/fylo_landingpage/",
        tagline: "A landing page"
      }
    ]
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const header = {
      heading: "PROJECTS",
      subheading: "Solutions I can create for you"
    };

    return (
      <div>
        <Header heading={header.heading} subheading={header.subheading} />
        <main>
          <section className="projects centered">
            <div className="grid">
              {this.state.projects.map(project => (
                <ProjectItems
                  key={project.id}
                  img={project.img}
                  name={project.name}
                  link={project.link}
                  tagline={project.tagline}
                />
              ))}
            </div>
          </section>
        </main>

        {/*<div className="centered">
              <button className="btn ">More Projects</button>
          </div> */}
        <section className="next">
          <Link to="/working-with-me">
            <p>
              Working with me
              <span>
                <i className="fas fa-arrow-right" />
              </span>
            </p>
          </Link>
        </section>
      </div>
    );
  }
}
