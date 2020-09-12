import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import uuid from "react-uuid";

const App = () => {
  const [tasks, setTasks] = useState([]);

  function newTask(values) {
    console.log(values);
    const newT = {
      id: uuid(),
      ...values,
    };
    setTasks([...tasks, newT]);
  }
  //delete Task
  function deleteTask(id) {
    const newTaskList = tasks.filter((task) => task.id !== id);
    setTasks([...newTaskList]);
  }
  //edit

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };
  const editTask = (task) => {
    console.log(task);
  };
  return (
    <div>
      <NavBar></NavBar>
      <Home
        editTask={editTask}
        tasks={tasks}
        newTask={newTask}
        onRemove={deleteTask}
        updateTask={updateTask}
      ></Home>
    </div>
  );
};

export default App;
