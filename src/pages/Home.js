import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../layout/Header";

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header
          heading="I develop websites that put small businesses in a position to succeed"
          subheading="Front End Development"
        >
          <button className="btn">
            <Link to="/working-with-me">LET'S WORK TOGETHER</Link>
          </button>
        </Header>

        <main>
          <section className="developed centered">
            <h3>Websites developed by me are:</h3>
            <div className="grid">
              <div className="grid-items">
                <div className="developed-img">
                  <img
                    src={require("../images/mobile-devices.svg")}
                    alt="phone"
                  />
                </div>
                <div className="developed-text">
                  <h4>Mobile Responsive</h4>
                  <p>
                    57% of internet users won't recommend a website with a
                    poorly designed website on mobile. Give your customers the
                    best experience possible and let me make your website
                    mobile-friendly, responsive and readable on any device
                    screen. From laptops & tablets to mobile.
                  </p>
                </div>
              </div>

              <div className="grid-items">
                <div className="developed-img">
                  <img
                    src={require("../images/cyber-security.png")}
                    alt="phone"
                  />
                </div>
                <div className="developed-text">
                  <h4>Secure</h4>
                  <p>
                    An unprotected website is a risk for your customers. Build
                    trust with your clients by getting your website secured and
                    keeping sensitive information discreet.
                  </p>
                </div>
              </div>

              <div className="grid-items">
                <div className="developed-img">
                  <img src={require("../images/seo.svg")} alt="phone" />
                </div>
                <div className="developed-text">
                  <h4>SEO Friendly</h4>
                  <p>
                    You want your website in the eyes of potential clients! By
                    using specific keywords in your industry, blogging and
                    optimizing your website, your chances of getting more sales
                    and ranked higher on google are increased.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="packages centered">
            <h3>Technologies Used</h3>
            <div className="grid">
              <div>
                <img
                  src={require("../images/wordpress.svg")}
                  alt="wordpress logo"
                />
                <h4>WordPress</h4>
                <p>
                  30% of the web is powered by WordPress. Used to create
                  flexible websites with lower setup costs that you can easily
                  update.
                </p>
              </div>
              <div>
                <img
                  src={require("../images/shopify.svg")}
                  alt="shopify logo"
                />
                <h4>Shopify</h4>
                <p>
                  Used to create your eCommerce store that can be customized to
                  your business using custom themes and apps. You can easily
                  analyze your sales using the built-in dashboard.
                </p>
              </div>

              <div className="custom_code">
                <img
                  src={require("../images/code-solid.svg")}
                  alt="code tags"
                />
                <h4>Custom Code</h4>
                <p>
                  For when you want custom, scalable solutions from scratch. I
                  can build your website using HTML, CSS, and JavaScript
                  (React.js & Node.js)
                </p>
              </div>
            </div>
          </section>

          <section className="testimonials centered">
            <h3>Testimonials</h3>
            <div className="grid">
              <div className="grid-container">
                <div className="grid-container-info">
                  <img src={require("../images/quote.svg")} alt="quote" />
                  <div className="centered">
                    <p>
                      Yetunde did a great job of helping me design and develop
                      our company's website. She was well organized and quick to
                      respond to asks and changes.
                    </p>
                    <p>Ana Agneshwar</p>
                    <p>CEO of Aimient</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="grid-container">
                  <div className="grid-container-info">
                    <img
                      src={require("../images/quote.svg")}
                      id="quote"
                      alt="quote"
                    />
                    <div className="centered">
                      <p>
                        I thoroughly enjoy my time working with Yetunde and came
                        to know her as a truly valuable asset to absolutely any
                        team. She is honest, dependable, and incredibly
                        hard-working.
                      </p>
                      <p>Bernice Cantu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="next">
            <Link to="/projects">
              <p>
                Projects
                <span>
                  <i className="fas fa-arrow-right" />
                </span>
              </p>
            </Link>
          </section>
        </main>
      </div>
    );
  }
}
