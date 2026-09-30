import React from "react";
import { Link } from "react-router-dom";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="home-contact" aria-labelledby="home-contact-title">
      <div className="home-contact-card">
        <span className="home-contact-eyebrow">LET’S CONNECT</span>
        <h2 id="home-contact-title">Have an idea in mind?</h2>
        <p>
          I’m always open to conversations, collaborations, and opportunities to
          build something useful together.
        </p>
        <Link className="home-contact-link" to="/contact">
          Contact me <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}

export default ContactCTA;
