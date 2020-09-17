import React from "react";
import { Modal, Button } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

const DeleteTask = (props) => {
  const { confirm } = Modal;

  function showConfirm() {
    confirm({
      title: "Do you Want to delete this task?",
      icon: <ExclamationCircleOutlined />,
      content: props.task.name,
      onOk() {
        props.onRemove(props.task.id);
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  }
  return (
    <Button
      type="primary"
      danger
      onClick={showConfirm}
      icon={<DeleteOutlined />}
    ></Button>
  );
};

export default DeleteTask;
