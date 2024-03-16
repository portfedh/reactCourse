// App.js
import "./styles.css";
import { useState } from "react";

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
};

export default function App() {
  const [steps, setSteps] = useState(5);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Title />
      <Steps steps={steps} setSteps={setSteps} />
      <Counter count={count} setCount={setCount} />
      <CurrentDate count={count} />
    </div>
  );
}

function CurrentDate({ count }) {
  const options = {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  };
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);
  currentDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div>
      {count} days from today is {currentDate}
    </div>
  );
}

function Title() {
  return <div>Counter exercise</div>;
}

function Steps({ steps, setSteps }) {
  return (
    <div style={buttonStyle}>
      <Button text="-" onClick={() => setSteps(steps - 1)} />
      <div>Steps: {steps}</div>
      <Button text="+" onClick={() => setSteps(steps + 1)} />
    </div>
  );
}

function Counter({ count, setCount }) {
  return (
    <div style={buttonStyle}>
      <Button text="-" onClick={() => setCount(count - 1)} />
      <div>Counter: {count}</div>
      <Button text="+" onClick={() => setCount(count + 1)} />
    </div>
  );
}

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
