import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const EditTaskForm = (props) => {
  const [currentTask, setCurrentTask] = useState(props.task);

  const handleChange = (prop) => (event) => {
    setCurrentTask({ ...currentTask, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.updateTask(currentTask.id, currentTask);
  };
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <div>
      <button
        className="btn btn-success btn-sm rounded-0 m-2 "
        type="button"
        id="edit"
        title="Edit"
        onClick={toggle}
      >
        <i className="fa fa-edit"></i>
      </button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>EDIT TASK</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="exampleAddress">Task title:</Label>
              <Input
                type="text"
                name="address"
                id="title"
                value={currentTask.name}
                onChange={handleChange("name")}
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">Start date:</Label>
                  <Input
                    type="date"
                    name="startdate"
                    id="startDate"
                    placeholder="date placeholder"
                    value={currentTask.start}
                    onChange={handleChange("start")}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePassword">End date:</Label>
                  <Input
                    type="date"
                    name="enddate"
                    id="endDate"
                    placeholder="date placeholder"
                    value={currentTask.end}
                    onChange={handleChange("end")}
                  />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <Label for="exampleAddress2">Dependency:</Label>
              <Input
                type="select"
                name="dependency"
                id="dependency"
                value={currentTask.dependencies}
                onChange={handleChange("dependencies")}
              >
                {props.tasks.map((task) => (
                  <option value={task.name} key={task.id}>
                    {task.name}
                  </option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleNumber">Progress:</Label>
              <Input
                type="number"
                name="progress"
                id="progress"
                value={currentTask.progress}
                onChange={handleChange("progress")}
              />
            </FormGroup>

            <Button type="submit" color="primary" onClick={toggle}>
              UPDATE TASK
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditTaskForm;
