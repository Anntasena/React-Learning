import { act, useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  //= jangan blokir data hanya dari UI saja gunakan ini agar lebih aman
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        balance: 500,
        isActive: true,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "withdraw":
      if (state.balance <= 0) return state;
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };
    case "payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };
    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return {
        initialState,
      };
    default:
      throw new Error("Action Unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="app">
      <h1>useReducer bank account</h1>
      <p>Balance: ( {balance} )</p>
      <p>Loan: ( {loan} )</p>

      <div className="option">
        <button
          onClick={() => dispatch({ type: "openAccount" })}
          disabled={isActive}
        >
          Open Account
        </button>
        <button
          onClick={() => dispatch({ type: "deposit", payload: 150 })}
          disabled={!isActive}
        >
          Deposit 150
        </button>
        <button
          onClick={() => dispatch({ type: "withdraw", payload: 50 })}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
        <button
          onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
          disabled={!isActive}
        >
          Request a loan 5000
        </button>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!isActive}
        >
          close account
        </button>
      </div>
    </div>
  );
}