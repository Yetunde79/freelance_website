import React, { Component } from "react";
import Header from "../layout/Header";

export default class Projects extends Component {
  render() {
    const header = {
      heading: "PROJECTS",
      subheading: "Lorem Ipsum"
    };
    return (
      <div>
        <Header heading={header.heading} subheading={header.subheading} />
        <main>
          <section className="projects">
            <div className="grid">
              <div>
                <img src={require("../images/aimient.png")} alt="aimient" />
                <h4>Aimient</h4>
              </div>
              <div>
                <img src={require("../images/jac9ja.png")} alt="aimient" />
                <h4>Jac9ja</h4>
              </div>
              <div>
                <img src={require("../images/shoot.png")} alt="aimient" />
                <h4>Shoot Technologies</h4>
              </div>
              <div>
                <img src={require("../images/yettifood.png")} alt="aimient" />
                <h4>Yettifood</h4>
              </div>
              <div>
                <img src={require("../images/shopify.png")} alt="aimient" />
                <h4>Shopify</h4>
              </div>
              <div>
                <img src={require("../images/fylo.png")} alt="aimient" />
                <h4>Fylo</h4>
              </div>
            </div>
            <button className="btn">More Projects</button>
          </section>
        </main>
      </div>
    );
  }
}
