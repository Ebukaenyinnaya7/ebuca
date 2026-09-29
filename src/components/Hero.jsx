import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="hero flex sm:flex-col md:flex-row">
        <div className="intro">
          <h1>Hi, I'm Ebuka</h1>
          <h2>Aspiring Software Engineer</h2>
          <p>
            I'm an aspiring software engineer who enjoys turning ideas into
            useful, intuitive digital experiences. I'm currently learning web
            development and building responsive websites while strengthening my
            skills in modern technologies.
            <br />
            <br />I love solving problems with code, learning new technologies,
            and creating projects that are both practical and engaging.
          </p>
        </div>
        <div className="image">
          <img src="/logo/EBUCA_emblem.png" alt="emblem" />
        </div>
      </div>
    </>
  );
}

export default Hero;
