import { Modal, Button } from "react-bootstrap";
import React from "react";

export function RemoveModal({ isRemoveModal, handleRemoveModal, title, data }) {
  return (
    <>
      <Modal show={isRemoveModal} onHide={() => handleRemoveModal(false, data)}>
        <Modal.Header closeButton>
          <Modal.Title>{`Are you sure to ${title} ${data.brand_name} Brand ?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Brand id: {data.brand_id}
          <br />
          Brand name: {data.brand_name}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => handleRemoveModal(false, data)}
          >
            Cancel
          </Button>
          <Button variant="primary">Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
