import { useState } from "react";

const messages = [
  "Learn React 😮",
  "Apply for job 💼",
  "Invest your new income 🪙",
];

export default function App() {
  //= Style
  const btnColor = { backgroundColor: "#7950f2", color: "#fff" };

  //= State
  // [FACT] semua yang didepannya ada "use" seperti useState, useEffect disebut hook
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  // const [test] = useState({ name: "syahrin" });
  // const [test, setTest] = useState({ name: "syahrin" });

  //= Handler
  const handlePrevious = function () {
    // if (step < 3) setStep(step - 1);
    if (step > 1) setStep((s) => s - 1); // Cara yg benar
  };
  const handleNext = function () {
    // if (step < 3) setStep(step + 1);
    if (step < 3) setStep((s) => s + 1); // Cara yang benar

    // BAD PRACTICE = dikarnakan memuatsi objek
    // test.name = "cok";
    // setTest({ name: "Matlail" });
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((open) => !open)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
            {/* {test.name} */}
          </p>

          <div className="buttons">
            <button style={btnColor} onClick={handlePrevious}>
              Previous
            </button>
            <button style={btnColor} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
