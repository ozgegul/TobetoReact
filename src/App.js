import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (i) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(i, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          placeholder="Enter a new task:"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            <span>{task}</span>
            <button onClick={() => deleteTask(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
