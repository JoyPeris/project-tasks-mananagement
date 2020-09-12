import React, { useState } from "react";
import { FrappeGantt } from "frappe-gantt-react";
import { Button, Jumbotron, Container } from "reactstrap";
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

  const handleViewMode = (e) => {
    setMode(e.target.value);
  };
  if (props.tasks.length === 0) {
    return (
      <Jumbotron fluid className="m-2">
        <Container fluid>
          <h1 className="display-3">NO TASKS IN PROJECT</h1>
        </Container>
      </Jumbotron>
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
        <Button
          color="primary"
          value="Day"
          className="m-2"
          onClick={handleViewMode}
        >
          DAY
        </Button>

        <Button
          color="primary"
          value="Week"
          className="m-2"
          onClick={handleViewMode}
        >
          WEEK
        </Button>

        <Button
          color="primary"
          value="Month"
          className="m-2"
          onClick={handleViewMode}
        >
          MONTH
        </Button>
      </div>
    );
  }
};

export default Gantt;
