import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";

class Header extends Component {
  state = {
    windowWidth: window.innerWidth,
    mobileNavVisible: false
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
      <ul className="menu">
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/services">Services</NavLink>
        </li>
        {/* <li>
<NavLink to="/articles">Articles</NavLink>
</li> */}
        <li>
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
      this.setState({ mobileNavVisible: true });
    } else {
      this.setState({ mobileNavVisible: false });
    }
  };

  renderNavigation = () => {
    if (this.state.windowWidth <= 500) {
      return [
        <div className="mobilemenu">
          {this.renderMobileNav()}
          <i className="fas fa-bars hamburger" onClick={this.handleNavLink} />
        </div>
      ];
    } else {
      return [<div>{this.navigationlink()}</div>];
    }
  };

  render() {
    const { heading, subheading } = this.props;
    return (
      <header>
        <nav>
          <img src={logo} alt="logo" />
          {this.renderNavigation()}
        </nav>
        <div className="header-text">
          <h1 className="heading">{heading}</h1>
          <h4>{subheading}</h4>

          {this.props.children}
        </div>
      </header>
    );
  }
}

export default Header;
