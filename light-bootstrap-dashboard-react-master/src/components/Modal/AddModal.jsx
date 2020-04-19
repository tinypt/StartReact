import { Modal, Button, Col } from "react-bootstrap";
import React from "react";
import Input from "components/Input/Input.jsx";

export function AddModal({ isAddModal, handleAddModal }) {
  
  const styles ={
    container : { color : "red" }
  }
  
  return (
    <>
      <Modal show={isAddModal} onHide={() => handleAddModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col md={6}>
            Brand code: <span style={styles.container}>*</span><Input type="text" />
          </Col>
          <Col md={6}>
            Brand name: <span style={styles.container}>*</span><Input type="text" />
          </Col>
          <br/>
          <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleAddModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" >Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
