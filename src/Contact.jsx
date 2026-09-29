import React, { useState } from "react";
import "./Contact.css";

const CONTACT_EMAIL = "ebukaenyinnaya7@gmail.com";
const CONTACT_PHONES = ["+2347078399802", "+2347013446978"];
const GITHUB_URL = "https://github.com/Ebukaenyinnaya7";
const WHATSAPP_MESSAGE = "Hi Ebuca I want to create a website";

function Contact() {
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    const senderEmail = payload.email;

    setIsSubmitting(true);
    setSubmissionStatus("idle");
    setSubmissionError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...payload,
          _subject: `Portfolio enquiry: ${payload.subject}`,
          _replyto: senderEmail,
          _template: "table",
        }),
      });
      const responseText = await response.text();
      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error("The email service returned an unreadable response.");
      }

      if (!response.ok || !(result.success === true || result.success === "true")) {
        throw new Error(result.message || result.error || "The message could not be submitted.");
      }

      form.reset();
      setSubmissionStatus("success");
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : "Please try again.");
      setSubmissionStatus("error");
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
          <form onSubmit={handleSubmit}>
            <label className="contact-honeypot" aria-hidden="true">
              Leave this field empty
              <input type="text" name="_honey" tabIndex={-1} autoComplete="off" />
            </label>
            <div className="contact-field-row">
              <label>
                Your name
                <input type="text" name="name" placeholder="e.g. Alex" required />
              </label>
              <label>
                Your email
                <input type="email" name="email" placeholder="you@example.com" required />
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
            <p
              className={`contact-form-status ${submissionStatus}`}
              role="status"
              aria-live="polite"
            >
              {submissionStatus === "success" && "Submitted! Your request was received."}
              {submissionStatus === "error" && (
                <>
                  We couldn’t submit your message: {submissionError} Please try again or email{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
                </>
              )}
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
