import React, { useState } from "react";
import { FrappeGantt } from "frappe-gantt-react";
import { Button, Skeleton, PageHeader } from "antd";
import "./frappe-gantt.css";
import Moment from "moment";

const Gantt = (props) => {
  const [mode, setMode] = useState("Day");

  const handleDateChange = (task, start, end) => {
    task.start = Moment(start).format("YYYY-MM-DD");
    task.end = Moment(end).format("YYYY-MM-DD");
    props.updateTask(task.id, task);
  };

  const handleProgressChange = (task, progress) => {
    task.progress = progress;
    props.updateTask(task.id, task);
  };

  if (props.tasks.length === 0) {
    return (
      <div>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="NO TASKS, ADD TASKS"
          subTitle="This is a subtitle"
        />
        <Skeleton></Skeleton>
      </div>
    );
  } else {
    return (
      <div className="container mt-4">
        <FrappeGantt
          tasks={props.tasks}
          viewMode={mode}
          onClick={(task) => console.log(task)}
          onDateChange={(task, start, end) =>
            handleDateChange(task, start, end)
          }
          onProgressChange={(task, progress) =>
            handleProgressChange(task, progress)
          }
          onTasksChange={(tasks) => console.log(tasks)}
        />
        <Button type="primary" className="m-2" onClick={() => setMode("Day")}>
          DAY
        </Button>

        <Button type="primary" className="m-2" onClick={() => setMode("Week")}>
          WEEK
        </Button>

        <Button type="primary" className="m-2" onClick={() => setMode("Month")}>
          MONTH
        </Button>
      </div>
    );
  }
};

export default Gantt;
