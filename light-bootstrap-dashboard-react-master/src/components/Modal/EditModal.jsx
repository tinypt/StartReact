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
                จะแก้หรอ รอก่อนนะยังทำไม่เป็นอะ ซอรี่ _/\_
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleEditModal(false)}>Cancel</Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
