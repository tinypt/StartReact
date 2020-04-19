import { Modal, Button, Col, Form } from "react-bootstrap";
import React, { useState } from "react";
import Input from "components/Input/Input.jsx";

export function EditModal({isEditModal, handleEditModal, title, data }) {
  // console.log(data.brand_name);
  // const brandNameHook = () => {
    const [name, setName] = useState(data.brand_id);
    // };
    console.log(name);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Submitting New Name " ${name} "`);
  };
  return (
    <>
      <Modal show={isEditModal} onHide={() => handleEditModal(false, data)}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>{`${title} Brand`}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Col md={6}>Brand id: {data.brand_id}</Col>
            <Col md={6}>
              Brand name:
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <br />
            <br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Col md={12}>
              <Col md={10}>
                <Button
                  variant="secondary"
                  onClick={() => handleEditModal(false, data)}
                >
                  Cancel
                </Button>
              </Col>
              <Input
                type="submit"
                class="btn btn-outline-secondary"
                value="Confirm"
                onClick={() => handleEditModal(false, data)}
              />
            </Col>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
