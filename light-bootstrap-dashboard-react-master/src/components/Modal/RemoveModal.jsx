import { Modal, Button } from "react-bootstrap";
import React from "react";

export function RemoveModal({isRemoveModal,handleMoveModal}) {
  return (
    <>
      <Modal show={isRemoveModal} onHide={()=>handleMoveModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Remove brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                id :
                <br/>
                Name: <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleMoveModal(false)}>Close</Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
