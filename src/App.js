import "./App.css";
import React from "react";
import Dice from "./Dice";
import Calculator from "./Calculator";
import Todo from "./Todo";

function App() {
  return (
    <React.Fragment>
      <Calculator />
      <Dice />
      <Todo />
    </React.Fragment>
  );
}

export default App;
