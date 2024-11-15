import { useState } from "react";

export default function App() {
  return <TipCalculator />;
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = (bill * (tip1 + tip2)) / 2 / 100;
  const total = bill + tip;

  const handlerReset = function () {
    setBill("");
    setTip1(0);
    setTip2(0);
  };

  return (
    <div className="tip-container">
      <Bill bill={bill} setBill={setBill} />

      <Tip tip={tip1} setTip={setTip1}>
        <p>How did you like the service?</p>
      </Tip>

      <Tip tip={tip2} setTip={setTip2}>
        <p>How did your friend like the service?</p>
      </Tip>

      {bill > 0 && (
        <>
          <Total bill={bill} tip={tip} total={total} />
          <Reset onReset={handlerReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div className="bill">
      <p>How much was the bill?</p>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Tip({ tip, setTip, children }) {
  return (
    <div className="tip">
      {children}
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value="0">service (0%)</option>
        <option value="5">service (5%)</option>
        <option value="10">service (10%)</option>
        <option value="20">service (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tip, total }) {
  return (
    <p className="total">
      You Pay $({total}) (${Math.round(bill)} + ${Math.round(tip)} Tip)
    </p>
  );
}

function Reset({ onReset }) {
  return <button onClick={() => onReset()}>Reset</button>;
}
