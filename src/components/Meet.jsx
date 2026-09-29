import React from "react";
import "./Meet.css";

function Meet() {
  return (
    <div className="meet">
      <h3>MEET EBUKA</h3>
      <div className="meet-content">
        <div className="left">
          <p>
            Hi, I'm Ebuka, an aspiring software engineer who enjoys how
            technology can surprise people and make life better. I've completed
            HTML, CSS, and JavaScript, and I'm currently learning React. I'm
            excited to keep building my skills and explore new areas of
            software, including AI.
          </p>
          <p>
            My goal is to create useful technology, build a successful future,
            and use what I learn to help others. Outside of coding, I enjoy
            playing PS football, taking part in sports, trying new things, and
            reading interesting topics. One day, I hope to build my own game. I
            believe in working hard, and my faith in God is important to me.
          </p>
        </div>
        <div className="right">
          <img src="/logo/EBUCA_emblem.png" alt="EBUCA blue emblem" />
          <span className="right-caption">Curious by nature. Building for the future.</span>
        </div>
      </div>
    </div>
  );
}

export default Meet;
