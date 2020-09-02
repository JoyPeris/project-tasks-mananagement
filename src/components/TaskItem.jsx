import React, { useState } from "react";
import { ListGroupItem } from "reactstrap";
import { Collapse, Button, CardBody, Card } from "reactstrap";
import { Tooltip } from "reactstrap";

const TaskItem = (props) => {
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
        <Button
          id="details"
          outline
          color="primary"
          onClick={toggle}
          // style={{ marginBottom: "1rem" }}
        >
          {props.task.name}
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
              <p>Startdate: {props.task.start}</p>
              <p>End date: {props.task.end}</p>
              <p>Progress: {props.task.progress}</p>
              <p>Dependencies: {props.task.dependencies}</p>
            </CardBody>
          </Card>
        </Collapse>
        <div className=" float-right">
          <button
            className="btn btn-success btn-sm rounded-0 m-2 "
            type="button"
            id="edit"
            title="Edit"
          >
            <i className="fa fa-edit"></i>
          </button>
          <Tooltip
            placement="top"
            isOpen={edittipOpen}
            target="edit"
            toggle={toggleEditToolTip}
          >
            Edit
          </Tooltip>

          <button
            className="btn btn-danger btn-sm rounded-0 m-2 "
            type="button"
            id="delete"
            title="Delete"
          >
            <i className="fa fa-trash"></i>
          </button>
          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            target="delete"
            toggle={toggleDeleteToolTip}
          >
            Delete
          </Tooltip>
        </div>
      </ListGroupItem>
    </div>
  );
};

export default TaskItem;
