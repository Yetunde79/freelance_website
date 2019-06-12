import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import uuid from "uuid";
import { fadeInDown, slideInDown } from "react-animations";

import styled, { keyframes } from "styled-components";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";

const fadeAnimation = keyframes`${fadeInDown}`;
const slideAnimation = keyframes`${slideInDown}`;

const FadeDiv = styled.div`
  animation: 1s ${fadeAnimation};
`;

const SlideDiv = styled.div`
  animation: 1s ${slideAnimation};
`;

class Header extends Component {
  state = {
    windowWidth: window.innerWidth,
    mobileNavVisible: false,
    closeButton: false
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
      <ul className="menu" key={uuid.v4()}>
        <li key={uuid.v4()}>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li key={uuid.v4()}>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li key={uuid.v4()}>
          <NavLink to="/working-with-me">Working with me</NavLink>
        </li>
        <li key={uuid.v4()}>
          <NavLink to="/services">Services</NavLink>
        </li>
        {/* <li>
          <NavLink to="/articles">Articles</NavLink>
          </li> */}
        <li key={uuid.v4()}>
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
      this.setState({ mobileNavVisible: true, closeButton: true });
    }
  };

  closeNav = () => {
    this.setState({ mobileNavVisible: false, closeButton: false });
  };

  renderNavigation = () => {
    if (this.state.windowWidth <= 500) {
      return [
        <div key={uuid.v4()}>
          <i
            className="fas fa-bars fa-2x hamburger"
            onClick={this.handleNavLink}
          />

          <div className="overlay mobilemenu" id="myNav">
            <FadeDiv>
              {this.renderMobileNav()}
              {this.state.closeButton ? (
                <i
                  className="fas fa-times fa-2x close"
                  onClick={this.closeNav}
                />
              ) : null}
            </FadeDiv>
          </div>
        </div>
      ];
    } else {
      return [<div key={uuid.v4()}>{this.navigationlink()}</div>];
    }
  };

  render() {
    const { heading, subheading } = this.props;
    return (
      <header>
        <nav>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          {this.renderNavigation()}
        </nav>

        <div className="header-text">
          <SlideDiv>
            <h1 className="heading">{heading}</h1>
            <h4 className="subheading">{subheading}</h4>

            {this.props.children}
          </SlideDiv>
        </div>
      </header>
    );
  }
}

export default Header;
