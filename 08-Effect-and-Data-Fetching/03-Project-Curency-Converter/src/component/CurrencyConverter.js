import { useEffect, useState } from "react";

import { ToCurrency } from "./ToCurrency";
import { ValueCurrency } from "./ValueCurrency";
import { FromCurrency } from "./FromCurrency";
import { InputCurrency } from "./InputCurrency";

export function CurrencyConverter() {
  const [inputMoney, setInputMoney] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchExchange() {
  //     try {
  //       const res = await fetch("https://api.frankfurter.dev/v1/latestaa");
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (err) {
  //       console.error(`Error fetching exchange rates ${err.message}`);
  //     }
  //   }
  //   fetchExchange();
  // }, []);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.dev/v1/latest?amount=${inputMoney}&from=${fromCur}&to=${toCur}`
        );
        // const res = await fetch("https://api.frankfurter.dev/v1/latest");
        const data = await res.json();
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }

      if (fromCur === toCur || inputMoney <= 0) return setConverted(inputMoney);
      convert();
    },
    [inputMoney, fromCur, toCur]
  );

  return (
    <div className="app-box">
      <InputCurrency
        inputMoney={inputMoney}
        setInputMoney={setInputMoney}
        isLoading={isLoading}
      />
      <div className="currency-box">
        <FromCurrency fromCur={fromCur} setFromCur={setFromCur} />
        <ToCurrency toCur={toCur} setToCur={setToCur} />
      </div>
      <ValueCurrency>
        {isLoading ? "Loading..." : `${converted.toLocaleString()} ${toCur}`}
      </ValueCurrency>
    </div>
  );
}
