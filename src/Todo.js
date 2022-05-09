import React, { useState, useReducer } from "react";
import TodoItem from "./TodoItem";
import Card from "./Card";

export const ACTIONS = {
  ADD: "add",
  TOGGLE: "toggle",
  DELETE: "delete",
};

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false };
};

const reducer = (todoList, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...todoList, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE:
      return todoList.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todoList;
      });
    case ACTIONS.DELETE:
      return todoList.filter((todo) => todo.id !== action.payload.id);
    default:
      return todoList;
  }
};

const Todo = () => {
  const [nameUseState, setNameUseState] = useState("");
  const [todoList, dispatch] = useReducer(reducer, []);

  const handleForSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: ACTIONS.ADD, payload: { name: nameUseState } });
    setNameUseState("");
  };

  return (
    <Card>
      <form onSubmit={handleForSubmit}>
        <input
          type="text"
          value={nameUseState}
          onChange={(e) => setNameUseState(e.target.value)}
        />
      </form>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </Card>
  );
};

export default Todo;
