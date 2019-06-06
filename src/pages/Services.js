import React, { Component } from "react";
import Header from "../layout/Header";

import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    return (
      <div>
        <Header
          heading="SERVICES"
          subheading="Development services that solve real business problems"
        />
        <main>
          <section className="service_text">
            <p>
              Currently 86% of business have a online presence. Sites like IMBD
              have been around forever but it's sites like Amazon that have
              changed the game forever.
            </p>
            <p>
              Your business may not be Amazon but through a strong online
              presence your business will get more attention from much larger
              audience than you could ever reach without a website.
            </p>
            <p>
              I am your ongoing collobarator from website development to ongoing
              maintenance. We will collaborate to bring your website to life
              exactly the way you envision.
            </p>
          </section>

          <section className=" package_type centered">
            <h3 id="development">
              Website Development and Redevelopment Packages
            </h3>

            <div className="grid">
              <div>
                <div className="heading">
                  <h4>BASIC</h4>
                  <hr />
                </div>
                <div className="development_text">
                  <h5 className="pages">1-3 pages</h5>
                  <hr />
                  <ul>
                    <li className="check">Website development</li>
                    <li className="check">Mobile Responsive</li>
                    <li>Includes Design</li>
                    <li>SEO Friendly</li>
                    <li>Web security</li>
                    <li>Domain email setup</li>
                    <li>Social Media setup</li>
                    <li>Google My Business setup</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="heading">
                  <h4>DELUXE</h4>
                  <hr />
                </div>
                <div className="development_text">
                  <h5 className="pages">1-5+ pages</h5>
                  <hr />
                  <ul>
                    <li className="check">Website development</li>
                    <li className="check">Mobile Responsive</li>
                    <li className="check">Includes Design</li>
                    <li className="check">SEO Friendly</li>
                    <li>Web security</li>
                    <li>Domain email setup</li>
                    <li>Social Media setup</li>
                    <li>Google My Business setup</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="heading">
                  <h4>PREMIUM</h4>
                  <hr />
                </div>
                <div className="development_text">
                  <h5 className="pages">1-5+ pages</h5>
                  <hr />
                  <ul>
                    <li className="check">Website development</li>
                    <li className="check">Mobile Responsive</li>
                    <li className="check">Includes Design</li>
                    <li className="check">SEO Friendly</li>
                    <li className="check">Web security</li>
                    <li className="check">Domain email setup</li>
                    <li className="check">Social Media setup</li>
                    <li className="check">Google My Business setup</li>
                  </ul>
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
                  Building your website by customizing themes and leveraging
                  plugins
                </p>
              </div>
              <div>
                <img
                  src={require("../images/shopify.svg")}
                  alt="shopify logo"
                />
                <h4>Shopify</h4>
                <p>
                  Building your store by customizing Liquid and using Shopify
                  apps.
                </p>
              </div>

              <div className="custom_code">
                <img
                  src={require("../images/code-solid.svg")}
                  alt="code tags"
                />
                <h4>Custom Code</h4>
                <p>
                  Building your website using HTML, CSS and JavaScript (React.js
                  & Node.js)
                </p>
              </div>
            </div>
          </section>

          <section className="maintenance section_padding">
            <h4>Website Maintenance</h4>
            <h4>$150</h4>
            <p>
              A montly retainer to take care of any coding, tech or maintenance
              for up to 4 hours a month. You can also let the months rollover
              for that minor update. You have the option to have me take care of
              your site long-term, so that you have more time for what really
              matters - your business.
            </p>
          </section>
        </main>

        <section className="next">
          <Link to="/contact">
            <p>
              Contact
              <span>
                <i className="fas fa-arrow-right" />
              </span>
            </p>
          </Link>
        </section>
      </div>
    );
  }
}

export default Services;
