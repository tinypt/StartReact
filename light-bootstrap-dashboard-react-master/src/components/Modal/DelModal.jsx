import { Modal, Button } from "react-bootstrap";
import React from "react";


export function DelModal({isDelModal,handleDelModal}) {
  return (
    <>
      <Modal show={isDelModal} onHide={()=>handleDelModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                Are you sure to delete n brands?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleDelModal(false)}>Cancel</Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
