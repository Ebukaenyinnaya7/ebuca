import React from "react";
import "./Building.css";

function Building() {
  return (
    <section className="building" aria-labelledby="building-title">
      <div className="building-image-wrap">
        <img
          className="building-image"
          src="/images/coding.jpg"
          alt="A coding workspace representing Ebuka's web development journey"
        />
        <span className="building-image-label">Learning by building</span>
      </div>

      <div className="building-copy">
        <span className="building-eyebrow">THE JOURNEY SO FAR</span>
        <h2 id="building-title">What I’m Building</h2>
        <p>
          I’m growing my skills through hands-on web development. After learning
          HTML, CSS, and JavaScript, I’m now learning React and putting those
          skills into practice. I’m curious about how AI and other technologies
          can help solve real problems, and I’m ready to learn what each project
          calls for.
        </p>
        <p>
          My long-term goal is to build useful software that helps people—and
          one day, create a game of my own.
        </p>

        <ul className="building-skills" aria-label="Web technologies I am learning">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    </section>
  );
}

export default Building;
