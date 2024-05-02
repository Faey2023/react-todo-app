import React from "react";
import { Typography } from "@mui/material";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    const completedTodos = todos.filter((todo) => todo.checked);
    return completedTodos.length;
  };

  return (
    <div className="todo-results">
      <Typography variant="body1">Done: {calculateChecked()}</Typography>
    </div>
  );
};
