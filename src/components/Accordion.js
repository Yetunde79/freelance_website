import React, { Component } from "react";
import "../stylesheets/services.scss";

class Accordion extends Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  toggle() {
    this.setState({
      active: !this.state.active,
      className: "active"
    });
  }

  render() {
    const activeClass = this.state.active ? "active" : "inactive";
    const question = this.props.details;
    return (
      <div className={activeClass} onClick={this.toggle}>
        <span className="summary">{question.summary}</span>
        <span className="folding-pannel answer">{question.answer}</span>
      </div>
    );
  }
}

export default Accordion;
