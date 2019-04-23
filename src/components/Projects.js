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
          <section>
            <div className="grid">
              <div>Aimient</div>
              <div>Jac9ja</div>
              <div>Shoot Technologies</div>
              <div>Yettifood</div>
              <div>Shopify</div>
              <div>Fylo</div>
            </div>
            <button className="btn">More Projects</button>
          </section>
        </main>
      </div>
    );
  }
}
