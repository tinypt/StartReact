import { Modal, Button } from "react-bootstrap";
import React from "react";

export function RemoveModal({isRemoveModal,handleRemoveModal}) {
  return (
    <>
      <Modal show={isRemoveModal} onHide={()=>handleRemoveModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Remove brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                คุณแน่ใจนะว่าจะลบ...ให้ชัวร์น้าาาาลบของจริงนะ!!!!!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleRemoveModal(false)}>Cancel</Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
