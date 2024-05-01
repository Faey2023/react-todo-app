import * as React from "react";
import "./todo-form.scss";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    // Function to add todo
    if (task.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        task: task.trim(),
        checked: false,
        // completed: false,
      };
      setTodos([...todos, newTodo]);
      setTask("");
      // console.log(todos);
    }
  };
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };
  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
