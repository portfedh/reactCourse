import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function CardSkills(text) {
  const style = {
    margin: ".5rem 1.5rem",
    display: "flex",
    flexWrap: "wrap",
  };
  return (
    <div style={style}>
      <Skill skill="HTML+CSS" emoji="💩" color="red" />
      <Skill skill="JavaScript" emoji="💪🏽" color="yellow" />
      <Skill skill="Webdesign" emoji="👍" color="cyan" />
      <Skill skill="Git and Github" emoji="👶" color="Orange" />
      <Skill skill="React" emoji="🦀" color="cyan" />
      <Skill skill="Svelte" emoji="🦃" color="lightseagreen" />
    </div>
  );
}

function Skill(text) {
  const style = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    margin: ".2rem",
    padding: ".2rem 1rem",
    fontSize: ".7rem",
    fontWeight: "bold",
    display: "inline-block",
    borderRadius: "5px",
    backgroundColor: text.color,
  };

  return (
    <div style={style}>
      {text.skill} {text.emoji}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
