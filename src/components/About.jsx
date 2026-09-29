import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="head">
          <h3>ABOUT</h3>
        </div>
        <div className="content">
          <div className="left">
            <p>
              I'm someone who enjoys learning, creating, challenging myself to
              become better at what I do . My journey into software engineering
              started with curiosity about how websites and applications work,
              and that curiosity has grown into a genuine passion for
              technology.
            </p>
            <br />
            <br />
            <p>
              Outside of coding, I enjoy exploring new ideas, working on
              personal projects, and discovering ways to turn simple concepts
              into something meaningful. I'm always looking for opportunities to
              learn, grow and build things that make an impact.
            </p>
          </div>
          <div className="right">
            <img src="/images/coding.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
