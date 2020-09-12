import React from "react";
import TaskItem from "./TaskItem";
import { ListGroup } from "reactstrap";
import AddTask from "./AddTask";

const Task = ({
  editTask,
  tasks,
  newTask,
  onRemove,

  updateTask,
}) => {
  return (
    <div className="container mt-4">
      <ul className="list-inline">
        <li className="list-inline-item">
          <h2>TASK LIST</h2>
        </li>
        <li className="list-inline-item float-right mt-2">
          <AddTask tasks={tasks} newTask={newTask}></AddTask>
        </li>
      </ul>

      <ListGroup>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onRemove={onRemove}
            editTask={editTask}
            updateTask={updateTask}
            tasks={tasks}
          ></TaskItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default Task;
