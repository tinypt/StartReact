/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import axios from "axios";
import {
  Grid,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import _ from "lodash";
import { thBrandArray } from "variables/Variables.jsx";
// import Tasks from "components/Tasks/Tasks";
import Button from "components/CustomButton/CustomButton.jsx";
import { RemoveModal } from "components/Modal/RemoveModal.jsx";
import { AddModal } from "components/Modal/AddModal.jsx";
import { DelModal } from "components/Modal/DelModal.jsx";
import { EditModal } from "components/Modal/EditModal.jsx";
class Brand extends Component {
  state = {
    brands: [],
    data: {},
    isEditModal: false,
    isRemoveModal: false,
    isAddModal: false,
    isDelModal: false
  };

  handleEditModal = (event, brand) => {
    this.setState({ isEditModal: event, data: brand });
  };

  handleRemoveModal = (event, brand) => {
    this.setState({ isRemoveModal: event, data: brand });
  };

  handleAddModal = event => {
    this.setState({ isAddModal: event });
  };

  handleDelModal = event => {
    this.setState({ isDelModal: event });
  };

  handleCheckbox = event => {
    const target = event.target;
    this.setState({
      [target.name]: target.checked
    });
  };
  handleClick() {
    var i = 0;
    this.setState((i = 1));
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BE}/brands`).then(response => {
      this.setState({
        brands: response.data
      });
    });
  };
  // postDataHandle=()=>{
  //   const data = {
  //     code: this.state.code,
  //     name: this.state.name
  //   };
  //   axios.post(`${process.env.REACT_APP_BE}/brands`,data).then(response =>{
  //     console.log(response);
  //   })
  // }
  render() {
    var number = -1;
    var i = 0;
    // for(var i = 0; i < this.state.length ; i++){
    //   number = "Checkbox" + i;
    // }
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;

    return (
      <div className="content">
        <EditModal
          isEditModal={this.state.isEditModal}
          handleEditModal={this.handleEditModal}
          title="edit"
          data={this.state.data}
        />

        <RemoveModal
          isRemoveModal={this.state.isRemoveModal}
          handleRemoveModal={this.handleRemoveModal}
          title="remove"
          data={this.state.data}
        />
        <AddModal
          isAddModal={this.state.isAddModal}
          handleAddModal={this.handleAddModal}
        />

        <DelModal
          isDelModal={this.state.isDelModal}
          handleDelModal={this.handleDelModal}
        />

        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="ALL Brands"
                category="ประเภทของแบรนด์"
                ctTableFullWidth
                ctTableResponsive
                buttonAdd={
                  <Button
                    bsStyle="info"
                    fill
                    type="submit"
                    onClick={() => this.handleAddModal(true)}
                  >
                    Add Brand
                  </Button>
                }
                buttonDel={
                  <Button
                    bsStyle="danger"
                    fill
                    type="submit"
                    onClick={() => this.handleDelModal(true)}
                  >
                    Delete
                  </Button>
                }
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>
                          <Checkbox
                            number={number}
                            isChecked={i === 1 || i === 2 ? true : false}
                            //onChange={this.handleClick}
                          ></Checkbox>
                        </th>
                        {thBrandArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(this.state.brands, brand => (
                        <tr key={brand.brand_id}>
                          <th>
                            <Checkbox
                              number={brand.brand_id}
                              key={brand.brand_id}
                              isChecked={i === 1 || i === 2 ? true : false}
                            ></Checkbox>
                          </th>
                          <td>{brand.brand_id}</td>
                          <td>{brand.brand_name}</td>
                          <td>{brand.created_at}</td>
                          <td>{brand.updated_at}</td>
                          <td>{brand.update_by}</td>
                          <td>
                            <OverlayTrigger placement="top" overlay={edit}>
                              <Button
                                bsStyle="info"
                                simple
                                type="button"
                                bsSize="xs"
                                onClick={() =>
                                  this.handleEditModal(true, brand)
                                }
                              >
                                <i className="fa fa-edit" />
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={remove}>
                              <Button
                                bsStyle="danger"
                                simple
                                type="button"
                                bsSize="xs"
                                onClick={() =>
                                  this.handleRemoveModal(true, brand)
                                }
                              >
                                <i className="fa fa-times" />
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                }
              />
              <Col md={1}>
                <Button bsStyle="primary" fill type="submit">
                  Import CSV
                </Button>
              </Col>
              <Col md={1}>
                <Button bsStyle="success" fill type="submit">
                  Export CSV
                </Button>
              </Col>
              <Col md={10}></Col>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Brand;
