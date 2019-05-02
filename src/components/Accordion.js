import React, { Component } from "react";
import "../stylesheets/services.scss";

class Accordionan extends Component {
  state = {
    openSections: {},
    isOpen: false
  };

  toggle = e => {
    const { openSections, isOpen } = this.state;

    this.setState({ isOpen: !!openSections[e.target.id] });

    this.setState({
      openSections: {
        [e.target.id]: !isOpen
      }
    });
  };

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button className="accordion" id="section1" onClick={this.toggle}>
          Section 1
        </button>
        {isOpen && (
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
        )}
        <button className="accordion" id="section2" onClick={this.toggle}>
          Section 2
        </button>
        {isOpen && (
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
        )}
        <button className="accordion" id="section3" onClick={this.toggle}>
          Section 3
        </button>
        {isOpen && (
          <div className="panel">
            <p>Lorem ipsum...</p>
          </div>
        )}
      </div>
    );
  }
}

export default Accordionan;
