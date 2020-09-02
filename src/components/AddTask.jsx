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

const AddTask = (props) => {
  const [values, setValues] = useState({
    name: "",
    start: "",
    end: "",
    progress: 0,
    dependencies: "",
  });
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.newTask(values);
    setValues({
      name: "",
      start: "",
      end: "",
      progress: 0,
      dependencies: "",
    });
  };
  return (
    <div>
      <Button color="primary" onClick={toggle}>
        ADD TASK
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>ADD TASK</ModalHeader>
        <ModalBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="exampleAddress">Task title:</Label>
              <Input
                type="text"
                name="address"
                id="title"
                value={values.name}
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
                    value={values.start}
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
                    value={values.end}
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
                value={values.dependencies}
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
                value={values.progress}
                onChange={handleChange("progress")}
              />
            </FormGroup>

            <Button type="submit" color="primary" onClick={toggle}>
              SAVE TASK
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AddTask;
