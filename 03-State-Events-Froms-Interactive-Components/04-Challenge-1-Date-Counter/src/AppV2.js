import { useState } from "react";

//$ Date Counter Challange

export default function App() {
  return (
    <div className="centered-container">
      <div className="container">
        <Counter />
      </div>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);

  function incCount() {
    setCount((c) => c + step);
  }
  function decCount() {
    setCount((c) => c - step);
  }

  function reset() {
    setCount(1);
    setStep(1);
  }

  const date = new Date("august 21 1998");
  date.setDate(date.getDate() + count);

  return (
    <>
      {/* //=========================== */}
      <div className="counter pad--bot">
        <input
          type="range"
          value={step}
          min="0"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>{step}</span>
      </div>
      {/* //=========================== */}
      <div className="counter pad--bot">
        <button onClick={decCount}>-</button>
        <span>
          <input
            value={count}
            type="number"
            onChange={(e) => setCount(Number(e.target.value))}
          ></input>
        </span>
        <button onClick={incCount}>+</button>
      </div>

      {/* //=========================== */}
      <p className="counter">
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {/* //=========================== */}
      <div className="counter pad--bot">
        {count !== 1 || step !== 1 ? (
          <button onClick={reset}>Reset</button>
        ) : null}
      </div>
    </>
  );
}
