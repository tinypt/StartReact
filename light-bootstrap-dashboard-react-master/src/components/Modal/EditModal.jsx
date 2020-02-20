import { Modal, Button } from "react-bootstrap";
import React from "react";

export function EditModal({isEditModal,handleEditModal}) {
  return (
    <>
      <Modal show={isEditModal} onHide={()=>handleEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                body
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Save Changes</Button>
          <Button variant="secondary" onClick={()=>handleEditModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
