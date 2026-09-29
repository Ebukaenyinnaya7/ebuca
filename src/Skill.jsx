import React from "react";
import { Link } from "react-router-dom";
import "./Skill.css";

const skills = [
  {
    id: "html",
    mark: "5",
    image: "/images/skill-html.jpg",
    imageAlt: "Desktop monitor displaying source code in a code editor",
    name: "HTML",
    subtitle: "Structure and meaning",
    status: "FOUNDATION",
    description:
      "I use HTML to give web pages a clear, meaningful structure. Semantic elements help organize content so it is easier to understand, navigate, and maintain.",
    topics: ["Semantic elements", "Page structure", "Links and images", "Forms and inputs", "Accessible markup"],
    accent: "#f08a47",
  },
  {
    id: "css",
    mark: "#",
    image: "/images/skill-css.jpg",
    imageAlt: "Responsive website layouts displayed across a phone, laptop, and monitor",
    name: "CSS",
    subtitle: "Layout and visual design",
    status: "FOUNDATION",
    description:
      "I use CSS to shape the look and feel of a page, create layouts, and make interfaces adapt to different screen sizes.",
    topics: ["Selectors and the box model", "Flexbox", "CSS Grid", "Responsive design", "Transitions and animation"],
    accent: "#4b9fff",
  },
  {
    id: "javascript",
    mark: "JS",
    image: "/images/skill-javascript.jpg",
    imageAlt: "Laptop screen with colorful programming code",
    name: "JavaScript",
    subtitle: "Interaction and behavior",
    status: "FOUNDATION",
    description:
      "JavaScript brings a page to life. I use it to work with data, respond to user actions, and add interactive behavior to web experiences.",
    topics: ["Variables and functions", "Arrays and objects", "DOM interaction", "Events", "Modern JavaScript syntax"],
    accent: "#e9c84a",
  },
  {
    id: "react",
    mark: "⚛",
    image: "/images/skill-react.jpg",
    imageAlt: "Developer typing code on a laptop",
    name: "React",
    subtitle: "Reusable user interfaces",
    status: "CURRENTLY LEARNING",
    description:
      "I’m currently learning React and practicing how to break interfaces into reusable components and compose them into complete pages.",
    topics: ["Components", "JSX", "Props", "Rendering lists", "Building interactive interfaces"],
    accent: "#54d6e9",
  },
];

function Skill() {
  return (
    <main className="skill-page">
      <header className="skill-hero">
        <span className="skill-eyebrow">MY TOOLKIT</span>
        <h1>Skills I’m building</h1>
        <p>
          A closer look at the web technologies I’ve studied and the skills
          I’m continuing to develop.
        </p>
        <nav className="skill-jump-links" aria-label="Jump to a skill">
          {skills.map((skill) => (
            <a key={skill.id} href={`#${skill.id}`}>
              {skill.name}
            </a>
          ))}
        </nav>
      </header>

      <div className="skill-sections">
        {skills.map((skill, index) => (
          <section
            className={`skill-detail ${index % 2 ? "skill-detail-reverse" : ""}`}
            id={skill.id}
            key={skill.id}
            style={{ "--skill-accent": skill.accent }}
            aria-labelledby={`${skill.id}-title`}
          >
            <figure className="skill-visual">
              <img src={skill.image} alt={skill.imageAlt} loading="lazy" />
              <span className="skill-mark" aria-hidden="true">
                {skill.mark}
              </span>
            </figure>
            <div className="skill-detail-copy">
              <span className="skill-status">{skill.status}</span>
              <h2 id={`${skill.id}-title`}>{skill.name}</h2>
              <h3>{skill.subtitle}</h3>
              <p>{skill.description}</p>
              <h4>Topics I work with</h4>
              <ul>
                {skill.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <aside className="skill-next-step">
        <div>
          <span className="skill-eyebrow">ALWAYS LEARNING</span>
          <h2>Every project is a chance to grow.</h2>
          <p>I’m looking forward to learning more and putting these skills to use.</p>
        </div>
        <Link to="/contact">Let’s connect</Link>
      </aside>
    </main>
  );
}

export default Skill;
