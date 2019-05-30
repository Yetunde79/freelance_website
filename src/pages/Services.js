import React, { Component } from "react";
import Header from "../layout/Header";
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

          <section className="process section_padding">
            <h3>The process for working together</h3>
            <div className="process-inline">
              <div>
                <a
                  href="https://yetundesolaadebayo.typeform.com/to/baXWvR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="far fa-edit fa-2x" />

                  <p>Fill out the questionnaire</p>
                </a>
              </div>
              <div>
                <a
                  href="https://calendly.com/ysolaadebayo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                      Why should I use your services to make my website?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      I’m a developer that not only works on the technical
                      aspect of your website but consults with you so the
                      business strategy is reflected on your site. Also, I
                      guarantee clear communication throughout the whole
                      process.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How long will it take for my website to go live?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      In the first interview with me, I’ll try to learn as much
                      as possible about your ideas and wishes; with as few
                      phases as possible, we'll make the perfect site for you.
                      How quickly we create your website depends on you: The
                      faster we get all your information (e.g. for the contact
                      page), your own text and pictures, the faster I can get
                      started.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How long does the contract last?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      The contract lasts till the project has been delivered to
                      you or either party wants to end the contract.{" "}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Will I own all the project source files?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes! You will have full access to everything I create
                      along with all usage rights.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How often do we get in touch once we are working together?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Once a week, we will have a phone call discussing my
                      progress and expected progress on your website for next
                      week.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can you create an online store for me?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Yes, I can create your online store with Shopify or
                      Woocommerce.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can I start working with you?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      You can start working with me by filling out the
                      <a
                        href="https://yetundesolaadebayo.typeform.com/to/baXWvR"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        questionnaire
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://calendly.com/ysolaadebayo"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        scheduling a call
                      </a>{" "}
                      to discuss your business.{" "}
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
