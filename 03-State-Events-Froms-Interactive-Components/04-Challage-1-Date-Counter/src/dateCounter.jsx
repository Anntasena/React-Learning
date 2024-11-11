import { useState } from "react";

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

  const adjustValue = (setter, increment) => {
    setter((prev) => prev + increment);
  };

  const date = new Date("August 21, 1998");
  date.setDate(date.getDate() + count);

  const dateMessage =
    count === 0
      ? "Today is"
      : `${Math.abs(count)} days ${count > 0 ? "from today is" : "ago was"}`;

  return (
    <>
      <CounterControl
        label="Step"
        value={step}
        onDecrement={() => adjustValue(setStep, -1)}
        onIncrement={() => adjustValue(setStep, 1)}
      />
      <CounterControl
        label="Count"
        value={count}
        onDecrement={() => adjustValue(setCount, -step)}
        onIncrement={() => adjustValue(setCount, step)}
      />
      <p className="counter">
        <span>{dateMessage}</span> <span>{date.toDateString()}</span>
      </p>
    </>
  );
}

function CounterControl({ label, value, onIncrement, onDecrement }) {
  return (
    <div className="counter pad--bot">
      <button onClick={onDecrement}>-</button>
      <span>
        {label}: {value}
      </span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
