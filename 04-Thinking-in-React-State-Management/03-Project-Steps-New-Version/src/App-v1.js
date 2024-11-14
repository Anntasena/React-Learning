import { useState } from "react";

const messages = [
  "Learn React 😮",
  "Apply for job 💼",
  "Invest your new income 🪙",
];

export default function App() {
  return (
    <div>
      <Steps />
      {/* <Steps /> */}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  //= Handler
  const handlePrevious = function () {
    if (step > 1) setStep((s) => s - 1); // Cara yg benar
  };
  const handleNext = function () {
    if (step < 3) setStep((s) => s + 1); // Cara yang benar
  };

  return (
    <div>
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

          <StepMassage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button
                textColor="#fff"
                bgColor="#7950f2"
                onClick={() => alert("Got you!")}
              >
                Suprise!!
              </Button>
            </div>
          </StepMassage>

          <div className="buttons">
            <Button textColor="#fff" bgColor="#7950f2" onClick={handlePrevious}>
              <span>⬅️</span> Previous
            </Button>
            <Button textColor="#fff" bgColor="#7950f2" onClick={handleNext}>
              Next <span>➡️</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMassage({ step, children }) {
  return (
    <p className="message">
      <h3>Step {step}</h3>
      {children}
    </p>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      className="buttons"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
