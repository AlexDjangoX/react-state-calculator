import "./App.css";
import { useState, useReducer } from "react";

function App() {
  const [leftNumber, setLeftNumber] = useState("0");
  const [rightNumber, setRightNumber] = useState("0");
  const [symbol, setSymbol] = useState("+");
  const [calculatedTotal, setCalculatedTotal] = useState("0");

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

  const setNumberOne = () => {
    setLeftNumber("");
    setLeftNumber(leftNumber + "1");
  };

  return (
    <div className="calculator">
      <div className="panel">
        <p>{leftNumber}</p>
        <div className="numbers">
          <button onClick={() => setNumberOne()}>1</button>
          <button onClick={() => setLeftNumber(leftNumber + "2")}>2</button>
          <button onClick={() => setLeftNumber(leftNumber + "3")}>3</button>
          <button onClick={() => setLeftNumber(leftNumber + "4")}>4</button>
          <button onClick={() => setLeftNumber(leftNumber + "5")}>5</button>
          <button onClick={() => setLeftNumber(leftNumber + "6")}>6</button>
          <button onClick={() => setLeftNumber(leftNumber + "7")}>7</button>
          <button onClick={() => setLeftNumber(leftNumber + "8")}>8</button>
          <button onClick={() => setLeftNumber(leftNumber + "9")}>9</button>
          <button onClick={() => setLeftNumber(leftNumber + "0")}>0</button>
          <button onClick={() => setLeftNumber("0")}>Clear</button>
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
          <button onClick={() => setRightNumber(rightNumber + "1")}>1</button>
          <button onClick={() => setRightNumber(rightNumber + "2")}>2</button>
          <button onClick={() => setRightNumber(rightNumber + "3")}>3</button>
          <button onClick={() => setRightNumber(rightNumber + "4")}>4</button>
          <button onClick={() => setRightNumber(rightNumber + "5")}>5</button>
          <button onClick={() => setRightNumber(rightNumber + "6")}>6</button>
          <button onClick={() => setRightNumber(rightNumber + "7")}>7</button>
          <button onClick={() => setRightNumber(rightNumber + "8")}>8</button>
          <button onClick={() => setRightNumber(rightNumber + "9")}>9</button>
          <button onClick={() => setRightNumber(rightNumber + "0")}>0</button>
          <button onClick={() => setRightNumber("0")}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{calculatedTotal}</p>
        <div>
          <button onClick={() => totalCalculatedValue()}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
