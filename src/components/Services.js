import React from "react";
import Header from "../layout/Header";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import "../stylesheets/services.scss";

export default function Services() {
  return (
    <div>
      <Header
        heading="SERVICES"
        subheading="Development services that solve real business problems"
      />
      <main>
        <section className="service_text">
          I am your ongoing collobarator from website development to ongoing
          maintenance. We will colloborate to bring your website to life exactly
          the way you envision.
        </section>

        <section className="packages centered">
          <Popup
            trigger={
              <h3 id="development">
                Website Development and Redevelopment Packages
              </h3>
            }
            modal
            closeOnDocumentClick
          >
            <h1>Hi</h1>
          </Popup>
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
              <img src={require("../images/shopify.svg")} alt="shopify logo" />
              <h4>Shopify</h4>
              <p>
                Building your store by customizing Liquid and using Shopify
                apps.
              </p>
            </div>

            <Popup
              trigger={
                <div>
                  <img
                    src={require("../images/code-solid.svg")}
                    alt="code tags"
                  />
                  <h4>Custom Code</h4>
                  <p>Building your website using HTML, CSS and JavaScript</p>
                </div>
              }
              modal
              closeOnDocumentClick
            >
              <div className=" custom grid">
                <div>
                  <h4>HTML and CSS</h4>
                  <hr />
                  <div>
                    <p>
                      Building the front-end of your website using these
                      technologies
                    </p>
                  </div>
                </div>
                <div>
                  <h4>HTML and CSS</h4>
                  <hr />
                  <div>
                    <p>
                      Building the front-end of your website using these
                      technologies
                    </p>
                  </div>
                </div>
                <div>
                  <h4>HTML and CSS</h4>
                  <hr />
                  <div>
                    <p>
                      Building the front-end of your website using these
                      technologies
                    </p>
                  </div>
                </div>
              </div>
            </Popup>
          </div>
        </section>

        <section className="maintenance section_padding">
          <h4>Website Maintenance</h4>
          <h4>$150</h4>
          <p>
            A montly retainer to take care of any coding, tech or maintenance
            for up to 4 hours a month. You can also let the months rollover for
            that minor update. You have the option to have me take care of your
            site long-term, so that you have more time for what really matters -
            your business.
          </p>
        </section>

        <section className="process section_padding">
          <h3>The process for working together</h3>
          <div className="process-inline">
            <div>
              <i className="far fa-edit fa-2x" />
              <a href="https://yetundesolaadebayo.typeform.com/to/baXWvR">
                <p>Fill out the questionnaire</p>
              </a>
            </div>
            <div>
              <i className="far fa-calendar-alt fa-2x" />
              <a href="https://calendly.com/ysolaadebayo">
                <p>Schedule a consultation</p>
              </a>
            </div>
            <div>
              <i className="fas fa-signature fa-2x" />
              <p>Sign the contract</p>
            </div>
            <div>
              <img src={require("../images/party-popper.svg")} />
              <Link to="/contact">
                <p>Start working together!!!</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="faq section_padding">
          <h3>FAQ</h3>
          <div class="cd-faq-items">
            <ul id="basics" class="cd-faq-group">
              <li>
                <a class="cd-faq-trigger" href="#0">
                  Why should I use your services to improve my business?
                </a>
                <div class="cd-faq-content">content here</div>
              </li>

              <li>
                <a class="cd-faq-trigger" href="#0">
                  How do I sign up?
                </a>
                <div class="cd-faq-content">content here</div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
