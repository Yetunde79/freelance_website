import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function Contact() {
  return (
    <div>
      <Header heading="CONTACT" subheading="Get in Touch with me" />
      <main>
        <section>
          <div className="grid">
            <form>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea type="text" name="message" placeholder="message" />
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
