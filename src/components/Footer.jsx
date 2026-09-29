import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <h2>Let's Build Something Together</h2>
        <p>Have an idea or project in mind? I'd love to hear about it.</p>
      </div>
      <div className="middle">
        <div className="line"></div>
        <div className="center">
          <img src="/logo/EBUCA_emblem.png" alt="logo" />
          <i>
            <p>Ebuca</p>
          </i>
        </div>
        <div className="line"></div>
      </div>
      <div className="foot">
        <div className="info">
          <p>
            <b>GitHub:</b>{" "}
            <a href="https://github.com/Ebukaenyinnaya7" target="_blank" rel="noreferrer">
              github.com/Ebukaenyinnaya7
            </a>
          </p>
          <i className="fa-solid fa-circle" aria-hidden="true"></i>
          <p>
            <b>Email:</b>{" "}
            <a href="mailto:ebukaenyinnaya7@gmail.com">ebukaenyinnaya7@gmail.com</a>
          </p>
        </div>
        <p>
          <i className="fa-regular fa-copyright" aria-hidden="true"></i> 2026 Ebuka Enyinnaya. All
          rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
