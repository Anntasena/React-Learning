export function InputCurrency({ inputMoney, setInputMoney, isLoading }) {
  const handleInput = function (e) {
    setInputMoney(Number(e.target.value));
  };

  return (
    <input
      type="text"
      className="input-currency"
      value={inputMoney}
      onChange={handleInput}
      // disabled={isLoading}
    />
  );
}
