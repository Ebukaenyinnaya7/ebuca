import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const CONTACT_EMAIL = "ebukaenyinnaya7@gmail.com";
const CONTACT_PHONES = ["+2347078399802", "+2347013446978"];
const GITHUB_URL = "https://github.com/Ebukaenyinnaya7";
const WHATSAPP_MESSAGE = "Hi Ebuca I want to create a website";
const EMAILJS_SERVICE_ID = "service_ijuz5a8";
const EMAILJS_TEMPLATE_ID = "template_gnj06js";
const EMAILJS_PUBLIC_KEY = "56127VtT7fxru0K0l";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      setStatus({
        type: "success",
        message: "Thanks — your message was sent successfully. I’ll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS contact form error:", error);
      const errorDetail = error?.text || error?.message || "Unknown delivery error";
      setStatus({
        type: "error",
        message: `Your message couldn’t be sent (${error?.status || "network error"}): ${errorDetail}. Please try again or email Ebuka directly.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="contact-page">
      <header className="contact-heading">
        <span className="contact-eyebrow">GET IN TOUCH</span>
        <h1>Let’s start a conversation.</h1>
        <p>
          Have a project idea, want to collaborate, or just want to say hello?
          I’d be happy to hear from you.
        </p>
      </header>

      <div className="contact-layout">
        <section className="contact-intro" aria-labelledby="contact-intro-title">
          <div className="contact-orbit" aria-hidden="true">
            <img src="/logo/EBUCA_emblem.png" alt="" />
          </div>
          <span className="contact-eyebrow">A GOOD PLACE TO BEGIN</span>
          <h2 id="contact-intro-title">Let’s build something useful.</h2>
          <p>
            I’m growing as a developer and always open to good ideas, new
            challenges, and opportunities to learn with others.
          </p>

          <div className="contact-detail-list">
            <div className="contact-detail">
              <span className="contact-detail-icon" aria-hidden="true">@</span>
              <div>
                <span className="contact-detail-label">EMAIL</span>
                <a className="contact-detail-value" href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon contact-phone-icon" aria-hidden="true">+</span>
              <div>
                <span className="contact-detail-label">WHATSAPP</span>
                {CONTACT_PHONES.map((phone) => (
                  <a
                    className="contact-detail-value"
                    href={`https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
                    key={phone}
                    aria-label={`Open WhatsApp chat to ${phone}`}
                  >
                    {phone.replace(/(\+234)(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4")}
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-detail">
              <span className="contact-detail-icon contact-github-icon" aria-hidden="true">GH</span>
              <div>
                <span className="contact-detail-label">GITHUB</span>
                <a className="contact-detail-value" href={GITHUB_URL} target="_blank" rel="noreferrer">
                  github.com/Ebukaenyinnaya7
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-card" aria-labelledby="contact-form-title">
          <span className="contact-form-kicker">YOUR MESSAGE</span>
          <h2 id="contact-form-title">What’s on your mind?</h2>
          <form
            onSubmit={handleSubmit}
          >
            <div className="contact-field-row">
              <label>
                Your name
                <input type="text" name="name" placeholder="e.g. Alex" required />
              </label>
              <label>
                Your email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label>
              Subject
              <input type="text" name="subject" placeholder="What would you like to talk about?" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Write your message here..." required />
            </label>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
              {!isSubmitting && <span aria-hidden="true">→</span>}
            </button>
            <p className={`contact-form-status ${status.type}`} role="status" aria-live="polite">
              {status.message}
            </p>
            <p className="contact-form-note">
              Your message will be emailed directly to Ebuka.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Contact;
