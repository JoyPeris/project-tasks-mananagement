import React from "react";
import Gantt from "./Gantt";
import Task from "./Task";

const Home = ({ tasks, newTask, onRemove, editTask, updateTask }) => {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Task
            editTask={editTask}
            tasks={tasks}
            newTask={newTask}
            onRemove={onRemove}
            updateTask={updateTask}
          ></Task>
        </div>
        <div className="col-sm-12 col-md-8">
          <Gantt tasks={tasks} updateTask={updateTask}></Gantt>
        </div>
      </div>
    </div>
  );
};

export default Home;
