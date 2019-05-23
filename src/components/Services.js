import React, { Component } from "react";
import Header from "../layout/Header";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

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
              Your business may be Amazon but through a strong online presence
              your butinsee will get more attention from much larger audience
              than you could ever reach without a website.
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

              <Popup
                trigger={
                  <div className="custom_code">
                    <img
                      src={require("../images/code-solid.svg")}
                      alt="code tags"
                    />
                    <h4>Custom Code</h4>
                    <p>
                      Building your website using HTML, CSS and JavaScript
                      (React.js & Node.js)
                    </p>
                  </div>
                }
                modal
                closeOnDocumentClick
              >
                <div className="custom grid">
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
              for up to 4 hours a month. You can also let the months rollover
              for that minor update. You have the option to have me take care of
              your site long-term, so that you have more time for what really
              matters - your business.
            </p>
          </section>

          <section className="process section_padding">
            <h3>The process for working together</h3>
            <div className="process-inline">
              <div>
                <a href="https://yetundesolaadebayo.typeform.com/to/baXWvR">
                  <i className="far fa-edit fa-2x" />

                  <p>Fill out the questionnaire</p>
                </a>
              </div>
              <div>
                <a href="https://calendly.com/ysolaadebayo">
                  <i className="far fa-calendar-alt fa-2x" />
                  <p>Schedule a consultation</p>
                </a>
              </div>
              <div>
                <i className="fas fa-signature fa-2x" />
                <p>Sign the contract</p>
              </div>
              <div>
                <img
                  src={require("../images/party-popper.svg")}
                  alt="party popper"
                />
                <Link to="/contact">
                  <p>Start working together!!!</p>
                </Link>
              </div>
            </div>
          </section>

          <section className="faq section_padding">
            <h3>FAQ</h3>
            <div className="faq-items">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What harsh truths do you prefer to ignore?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Exercitation in fugiat est ut ad ea cupidatat ut in
                      cupidatat occaecat ut occaecat consequat est minim minim
                      esse tempor laborum consequat esse adipisicing eu
                      reprehenderit enim.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is free will real or just an illusion?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In ad velit in ex nostrud dolore cupidatat consectetur ea
                      in ut nostrud velit in irure cillum tempor laboris sed
                      adipisicing eu esse duis nulla non.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Services;
