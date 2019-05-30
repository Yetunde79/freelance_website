import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Articles from "./pages/Articles";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./layout/Footer";

import "./stylesheets/App.scss";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/articles" component={Articles} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
