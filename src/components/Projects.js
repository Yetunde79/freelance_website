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
          <section className="projects centered">
            <div className="grid">
              <div>
                <img src={require("../images/aimient.png")} alt="aimient" />
                <h4>Aimient</h4>
                <p>A recruiting company</p>
              </div>
              <div>
                <img src={require("../images/jac9ja.png")} alt="aimient" />
                <h4>Jac9ja</h4>
                <p>A blogging website</p>
              </div>
              <div>
                <img src={require("../images/shoot.png")} alt="aimient" />
                <h4>Shoot Technologies</h4>
                <p>A photography startup</p>
              </div>
              <div>
                <img src={require("../images/yettifood.png")} alt="aimient" />
                <h4>Yettifood</h4>
                <p>A food blog website</p>
              </div>
              <div>
                <img src={require("../images/shopify.png")} alt="aimient" />
                <h4>Shopify</h4>
                <p>A jewelry store</p>
              </div>
              <div>
                <img src={require("../images/fylo.png")} alt="aimient" />
                <h4>Fylo</h4>
                <p>A landing page</p>
              </div>
            </div>
            {/*<div className="centered">
              <button className="btn ">More Projects</button>
             </div> */}
          </section>
        </main>
      </div>
    );
  }
}
