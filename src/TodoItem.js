import React from "react";
import { ACTIONS } from "./Todo";
import "./index.css";

const TodoItem = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        className="button"
        onClick={() =>
          dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>
      <button
        className="button"
        onClick={() =>
          dispatch({ type: ACTIONS.DELETE, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
