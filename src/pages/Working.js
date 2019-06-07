import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import Header from "../layout/Header";

class Working extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <Header
          heading="WORKING WITH ME"
          subheading="Let's work together to expand your business"
        />
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
                    I’m a developer that not only works on the technical aspect
                    of your website but consults with you so the business
                    strategy is reflected on your site. Also, I guarantee clear
                    communication throughout the whole process.
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
                    In the first interview with me, I’ll try to learn as much as
                    possible about your ideas and wishes; with as few phases as
                    possible, we'll make the perfect site for you. How quickly
                    we create your website depends on you: The faster we get all
                    your information (e.g. for the contact page), your own text
                    and pictures, the faster I can get started.
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
                    Yes! You will have full access to everything I create along
                    with all usage rights.
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

        <section className="next">
          <Link to="/services">
            <p>
              Services
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

export default Working;
