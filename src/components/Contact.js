import React from "react";
import Header from "../layout/Header";

import "../stylesheets/contact.scss";

export default function Contact() {
  return (
    <div>
      <Header heading="CONTACT" subheading="Get in Touch with me" />
      <section className="contact">
        <div className="contact_section">
          <form
            method="POST"
            action="https://formspree.io/ysolaadebayo@gmail.com"
          >
            <div className="grid">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <textarea
              type="text"
              name="message"
              id="message"
              placeholder="message"
            />
            <div className=" centered">
              <input
                type="submit"
                className="btn"
                id="submit"
                value="GET IN TOUCH"
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
