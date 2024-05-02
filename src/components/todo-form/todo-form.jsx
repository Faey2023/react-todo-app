import React from "react";
import { TextField, Button } from "@mui/material";
import "./todo-form.scss";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        task: task.trim(),
        checked: false,
      };
      setTodos([...todos, newTodo]);
      setTask("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <TextField
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <Button variant="contained" onClick={handleAddTodo}>
        Add task
      </Button>
    </div>
  );
};
