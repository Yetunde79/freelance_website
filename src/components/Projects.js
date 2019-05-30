import React, { Component } from "react";
import Header from "../layout/Header";
import uuid from "uuid";
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
    const header = {
      heading: "PROJECTS",
      subheading: "Solutions I have created"
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
