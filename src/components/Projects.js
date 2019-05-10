import React, { Component } from "react";
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

  render() {
    const header = {
      heading: "PROJECTS",
      subheading: "Lorem Ipsum"
    };

    return (
      <div>
        <Header heading={header.heading} subheading={header.subheading} />
        <main>
          <section className="projects centered">
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
        </main>

        {/*<div className="centered">
              <button className="btn ">More Projects</button>
          </div> */}
      </div>
    );
  }
}
