// Flashcards exercise

import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(selectedId == id ? null : id);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

// Css Code

* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  padding: 20px;
}

.flashcards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.flashcards div {
  border: 1px solid #e7e7e7;
  background-color: #f7f7f7;
  border-radius: 7px;
  aspect-ratio: 2 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  cursor: pointer;
}

div.selected {
  border: 1px solid #e03131;
  background-color: #e03131;
  color: #fff;
  font-weight: bold;
}

