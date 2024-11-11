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

  function incStep() {
    setStep((c) => c + 1);
  }
  function decStep() {
    setStep((c) => c - 1);
  }

  const date = new Date("august 21 1998");
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="counter pad--bot">
        <button onClick={decStep}>-</button>
        <span>Step : {step}</span>
        <button onClick={incStep}>+</button>
      </div>
      <div className="counter pad--bot">
        <button onClick={decCount}>-</button>
        <span>Count : {count}</span>
        <button onClick={incCount}>+</button>
      </div>

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
    </>
  );
}
