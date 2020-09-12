import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { Tooltip } from "reactstrap";
import EditTaskForm from "./EditTaskForm";
import DeleteTask from "./DeleteTask";

const TaskItem = ({
  task,
  onRemove,
  editTask,

  updateTask,
  tasks,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [edittipOpen, setEdittipOpen] = useState(false);
  const [taskDetails, setTaskDetails] = useState(false);

  const toggleEditToolTip = () => setEdittipOpen(!edittipOpen);
  const toggleDeleteToolTip = () => setTooltipOpen(!tooltipOpen);
  const toggleDetailsToolTip = () => setTaskDetails(!taskDetails);

  return (
    <div>
      <ListGroupItem>
        <Button id="details" outline color="primary" onClick={toggle}>
          {task.name}
          <i className="fa fa-angle-double-down ml-5 mt-2 mb-2 mr-2"></i>
        </Button>
        <Tooltip
          placement="top"
          isOpen={taskDetails}
          target="details"
          toggle={toggleDetailsToolTip}
        >
          View Task Details
        </Tooltip>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <p>Startdate: {task.start}</p>
              <p>End date: {task.end}</p>
              <p>Progress: {task.progress}</p>
              <p>Dependencies: {task.dependencies}</p>
            </CardBody>
          </Card>
        </Collapse>
        <div className=" float-right">
          <ul className="list-inline">
            <li className="list-inline-item">
              <EditTaskForm
                updateTask={updateTask}
                task={task}
                tasks={tasks}
              ></EditTaskForm>
              <Tooltip
                placement="top"
                isOpen={edittipOpen}
                target="edit"
                toggle={toggleEditToolTip}
              >
                Edit
              </Tooltip>
            </li>
            <li className="list-inline-item float-right ">
              <DeleteTask onRemove={onRemove} task={task}></DeleteTask>

              <Tooltip
                placement="top"
                isOpen={tooltipOpen}
                target="delete"
                toggle={toggleDeleteToolTip}
              >
                Delete
              </Tooltip>
            </li>
          </ul>
        </div>
      </ListGroupItem>
    </div>
  );
};

export default TaskItem;
