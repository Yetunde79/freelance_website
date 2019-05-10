import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./layout/Footer";

import "./stylesheets/App.scss";

/*TODO
1. Add all text

2. Work on hamburger menu X

*/
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
