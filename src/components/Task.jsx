import React, { useEffect, useState } from "react";
import EditTaskForm from "./EditTaskForm";
import DeleteTask from "./DeleteTask";
import AddTask from "./AddTask";
import { Table } from "antd";

const Task = ({
  editTask,
  tasks,
  newTask,
  onRemove,

  updateTask,
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(
      tasks.map((task) => {
        return {
          key: task.id,
          name: task.name,
          start: task.start,
          end: task.end,
          progress: task.progress,
          dependencies: task.dependencies,
          edit: (
            <EditTaskForm
              updateTask={updateTask}
              task={task}
              tasks={tasks}
            ></EditTaskForm>
          ),
          delete: <DeleteTask onRemove={onRemove} task={task}></DeleteTask>,
        };
      })
    );
  }, [onRemove, updateTask, tasks]);

  const columns = [
    {
      title: "Task title",
      width: 200,
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },

    { title: "Start date", dataIndex: "start", key: "start", width: 150 },
    { title: "End date", dataIndex: "end", key: "end", width: 150 },
    { title: "Progress", dataIndex: "progress", key: "progress", width: 100 },
    { title: "Dependency", dataIndex: "dependencies", key: "dependencies" },
    { title: "Edit", dataIndex: "edit", key: "edit", width: 100 },
    { title: "Delete", dataIndex: "delete", key: "delete", width: 100 },
  ];

  return (
    <div className="container-fluid mt-4 overflow-auto">
      <ul className="list-inline">
        <li className="list-inline-item">
          <h2>TASK LIST</h2>
        </li>
        <li className="list-inline-item float-right mt-2">
          <AddTask tasks={tasks} newTask={newTask}></AddTask>
        </li>
      </ul>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300, y: 400 }} />
    </div>
  );
};

export default Task;
