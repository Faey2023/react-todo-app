import React from "react";
import { Typography } from "@mui/material";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

export const TodoList = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCheck = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <Typography variant="h6" className="todo-list-title">
        Things to do:
      </Typography>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <div key={todoItem.id} className="todo-item">
              <Checkbox
                label={todoItem.task}
                checked={todoItem.checked}
                onClick={() => toggleCheck(todoItem.id)}
                onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
                onDelete={() => handleDelete(todoItem.id)}
              />
            </div>
          ))}
        </div>
      ) : (
        <Typography variant="body1" className="no-todos">
          Looks like you're absolutely free today!
        </Typography>
      )}
    </div>
  );
};
