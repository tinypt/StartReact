import { Modal, Button, Col } from "react-bootstrap";
import React from "react";
import Input from "components/Input/Input.jsx";

export function EditModal({ isEditModal, handleEditModal, title, data }) {
  return (
    <>
      <Modal show={isEditModal} onHide={() => handleEditModal(false, data)}>
        <Modal.Header closeButton>
          <Modal.Title>{`${title} Brand`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col md={6}>
            Brand id:<Input type="text" value={data.brand_id} />
          </Col>
          <Col md={6}>
            Brand name: <Input type="text" value={data.brand_name} />
          </Col>
          <br/>
          <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => handleEditModal(false, data)}
          >
            Cancel
          </Button>
          <Button variant="primary">Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
