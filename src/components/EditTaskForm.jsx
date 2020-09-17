import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select,
} from "antd";
import Moment from "moment";
import moment from "moment";
import { EditOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const EditTaskForm = (props) => {
  const dateFormat = "YYYY-MM-DD";
  const { Option } = Select;
  const children = [];

  props.tasks.map((task) =>
    children.push(<Option key={task.id}>{task.name}</Option>)
  );

  const { RangePicker } = DatePicker;

  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    const range = values["dates"];
    let dependency = [];
    if (props.tasks.length > 0) {
      dependency = values["dependencies"];
    }
    const v = {
      name: values["name"],
      start: Moment(range[0].format()).format("YYYY-MM-DD"),
      end: Moment(range[1].format()).format("YYYY-MM-DD"),
      progress: values["progress"],
      dependencies: dependency,
    };

    props.updateTask(props.task.id, v);
    console.log("Received values of form: ", v);
    console.log("Success:", values);
    form.resetFields();
    setVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleDateChange = (range) => {
    const r1 = Moment(range[0].format()).format("YYYY-MM-DD");
    const r2 = Moment(range[1].format()).format("YYYY-MM-DD");

    console.log(r1, r2);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        icon={<EditOutlined />}
      ></Button>
      <Modal
        title="EDIT TASK"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
        ]}
      >
        <Form
          {...layout}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{
            name: props.task.name,
            dates: [
              moment(props.task.start, dateFormat),
              moment(props.task.end, dateFormat),
            ],
            progress: props.task.progress,
            dependencies: [props.task.dependencies],
          }}
        >
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please enter task title" }]}
          >
            <Input placeholder="Task title" />
          </Form.Item>

          <Form.Item
            name="dates"
            rules={[
              {
                required: true,
                message: "Please enter start date and end date",
              },
            ]}
          >
            <RangePicker format={dateFormat} onChange={handleDateChange} />
          </Form.Item>

          <Form.Item name="progress">
            <InputNumber min={1} max={100} placeholder="Progress" />
          </Form.Item>
          <Form.Item name="dependencies">
            <Select
              mode="multiple"
              allowClear
              style={{ width: "100%" }}
              placeholder="Select dependencies"
            >
              {children}
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default EditTaskForm;
