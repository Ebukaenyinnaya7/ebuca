import React from "react";
import { Link } from "react-router-dom";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills">
      <div className="head">
        <h3>SKILLS</h3>
      </div>

      <div className="content">
        <Link className="box" to="/skill#html" aria-label="Explore HTML skills">
          <div className="intro">
            <h5>HTML</h5>
            <p>Building well-structured, semantic, and accessible web pages.</p>
          </div>
        </Link>

        <Link className="box" to="/skill#css" aria-label="Explore CSS skills">
          <div className="intro">
            <h5>CSS</h5>
            <p>
              Creating responsive layouts, smooth animations, and modern user
              interfaces.
            </p>
          </div>
        </Link>

        <Link className="box" to="/skill#javascript" aria-label="Explore JavaScript skills">
          <div className="intro">
            <h5>JAVASCRIPT</h5>
            <p>Adding interactivity and functionality to web applications.</p>
          </div>
        </Link>

        <Link className="box" to="/skill#react" aria-label="Explore React skills">
          <div className="intro">
            <h5>REACT</h5>
            <p>
              Building dynamic, reusable, and component-based user interfaces.
            </p>
          </div>
        </Link>
      </div>
      <div className="explore-skills-wrap">
        <Link className="explore-skills" to="/skill">
          Explore all skills <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default Skills;
