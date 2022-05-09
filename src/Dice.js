import React, { useState } from "react";
import "./index.css";

const generateNumber = () => {
  return Math.floor(Math.random() * 6);
};

const initialDice = [generateNumber(), generateNumber(), generateNumber()];

const Dice = () => {
  const [dice, setDice] = useState(initialDice);

  const random = () => {
    const newDice = [generateNumber(), generateNumber(), generateNumber()];
    setDice(newDice);
  };

  return (
    <div style={{ margin: 100 }}>
      <div>Random Dice Roll</div>
      <button className="button" onClick={random}>
        Random
      </button>
      <div>
        {dice.map((el) => {
          return <li>{el}</li>;
        })}
      </div>
    </div>
  );
};

export default Dice;
