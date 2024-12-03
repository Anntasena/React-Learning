import { useEffect, useState } from "react";

export function ToCurrency({ toCur, setToCur }) {
  const [curr, setCurr] = useState([]);

  const handleChange = function (e) {
    setToCur(e.target.value);
  };

  useEffect(function () {
    async function fetchOption() {
      const res = await fetch("https://api.frankfurter.dev/v1/latest");
      const data = await res.json();
      setCurr(Object.entries(data.rates));
    }
    fetchOption();
  }, []);

  return (
    <select className="currency-option" value={toCur} onChange={handleChange}>
      {curr.map(([currency]) => (
        <option value={currency} key={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
}
