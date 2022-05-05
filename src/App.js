import "./App.css";
import { useState } from "react";

function App() {
  const [leftNumber, setLeftNumber] = useState("0");
  const [rightNumber, setRightNumber] = useState("0");
  const [symbol, setSymbol] = useState("+");
  const [calculatedTotal, setCalculatedTotal] = useState("0");
  const [storedValue, setStoredValue] = useState("");

  const totalCalculatedValue = () => {
    if (symbol === "+") {
      setCalculatedTotal(Number(leftNumber) + Number(rightNumber));
    }
    if (symbol === "-") {
      setCalculatedTotal(Number(leftNumber) - Number(rightNumber));
    }
    if (symbol === "*") {
      setCalculatedTotal(Number(leftNumber) * Number(rightNumber));
    }
    if (symbol === "÷") {
      setCalculatedTotal(Number(leftNumber) / Number(rightNumber));
    }
    setLeftNumber("0");
    setRightNumber("0");
  };

  const handleClickLeft = (e) => {
    let newLeftNumber;
    if (leftNumber.slice(0, 1) === "0" && leftNumber.length >= 1) {
      newLeftNumber = leftNumber.slice(1);
    } else {
      newLeftNumber = leftNumber;
    }
    const number = e.target.innerText;
    setLeftNumber(newLeftNumber + number);
  };

  const handleClickRight = (e) => {
    let newRightNumber;
    if (rightNumber.slice(0, 1) === "0" && rightNumber.length >= 1) {
      newRightNumber = rightNumber.slice(1);
    } else {
      newRightNumber = rightNumber;
    }
    const number = e.target.innerText;
    setRightNumber(newRightNumber + number);
  };

  const handleClickStoreValue = () => {
    setStoredValue(calculatedTotal);
  };

  const handleClickRecallLeft = () => {
    setLeftNumber(storedValue);
  };

  const handleClickRecallRight = () => {
    setRightNumber(storedValue);
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNumber}</p>
        <div className="numbers">
          <button onClick={handleClickLeft}>1</button>
          <button onClick={handleClickLeft}>2</button>
          <button onClick={handleClickLeft}>3</button>
          <button onClick={handleClickLeft}>4</button>
          <button onClick={handleClickLeft}>5</button>
          <button onClick={handleClickLeft}>6</button>
          <button onClick={handleClickLeft}>7</button>
          <button onClick={handleClickLeft}>8</button>
          <button onClick={handleClickLeft}>9</button>
          <button onClick={handleClickLeft}>0</button>
          <button onClick={() => setLeftNumber("0")}>Clear</button>
          <button onClick={handleClickRecallLeft}>Recall</button>
        </div>
      </div>

      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button onClick={() => setSymbol("+")}>+</button>
          <button onClick={() => setSymbol("-")}>-</button>
          <button onClick={() => setSymbol("*")}>*</button>
          <button onClick={() => setSymbol("÷")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{rightNumber}</p>
        <div className="numbers">
          <button onClick={handleClickRight}>1</button>
          <button onClick={handleClickRight}>2</button>
          <button onClick={handleClickRight}>3</button>
          <button onClick={handleClickRight}>4</button>
          <button onClick={handleClickRight}>5</button>
          <button onClick={handleClickRight}>6</button>
          <button onClick={handleClickRight}>7</button>
          <button onClick={handleClickRight}>8</button>
          <button onClick={handleClickRight}>9</button>
          <button onClick={handleClickRight}>0</button>
          <button onClick={() => setRightNumber("0")}>Clear</button>
          <button onClick={handleClickRecallRight}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{calculatedTotal}</p>
        <div>
          <button onClick={handleClickStoreValue}>Store Value</button>
          <button onClick={() => totalCalculatedValue()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
