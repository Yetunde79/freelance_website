import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Working from "./pages/Working";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";

import "./stylesheets/App.scss";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/working-with-me" component={Working} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </HashRouter>
    );
  }
}

export default App;
