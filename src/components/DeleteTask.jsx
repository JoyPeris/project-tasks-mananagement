import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalFooter } from "reactstrap";

const DeleteTask = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button
        className="btn btn-danger btn-sm rounded-0 m-2 "
        type="button"
        id="delete"
        title="Delete"
        onClick={toggle}
      >
        <i className="fa fa-trash"></i>
      </button>

      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle}>
          ARE YOU SURE YOU WANT TO DELETE TASK?
        </ModalHeader>

        <ModalFooter>
          <Button color="danger" onClick={() => props.onRemove(props.task.id)}>
            YES
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteTask;
