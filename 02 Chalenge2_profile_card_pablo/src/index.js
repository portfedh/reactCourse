import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="mainDiv">
      <CardImage />
      <CardTitle />
      <CardBody />
      <CardSkills />
    </div>
  );
}

function CardImage() {
  const style = { width: "100%" };
  return <img style={style} src="me.jpeg" alt="This is me" />;
}

function CardTitle() {
  const style = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };
  return <h2 style={style}>Pablo Cruz Lemini</h2>;
}

function CardBody() {
  const style = {
    textAlign: "justify",
    fontFamily: "Arial, sans-serif",
    padding: "0 2rem",
    fontSize: ".9rem",
  };
  return (
    <p style={style}>
      Full-stack web developer and finance professional at a family office. When
      not coding or working, I like to take dancing lessons, learn german, or
      see friends.
    </p>
  );
}

function CardSkills() {
  const style = {
    margin: ".5rem 1.5rem",
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={style}>
      {skills.map((skill) => {
        const emoji =
          skill.level === "advanced"
            ? "💪🏽"
            : skill.level === "intermediate"
            ? "👍"
            : skill.level === "beginner"
            ? "👶"
            : "";
        return <Skill skill={skill.skill} color={skill.color} emoji={emoji} />;
      })}
    </div>
  );
}

function Skill({ color, skill, emoji }) {
  const style = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: ".2rem",
    padding: ".2rem 1rem",
    fontSize: ".7rem",
    fontWeight: "bold",
    display: "inline-block",
    borderRadius: "5px",
    backgroundColor: color,
  };

  return (
    <div style={style}>
      {skill} {emoji}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
