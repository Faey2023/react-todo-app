import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    // Function to calculate completed tasks
    const completedTodos = todos.filter((todo) => todo.checked);
    // console.log("Completed todos:", completedTodos);
    // console.log(completedTodos.length);
    return completedTodos.length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
