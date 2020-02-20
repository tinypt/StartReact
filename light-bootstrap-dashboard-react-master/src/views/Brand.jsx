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
import { thBrandArray } from "variables/Variables.jsx";
import Tasks from "components/Tasks/Tasks";
import Button from "components/CustomButton/CustomButton.jsx";
import { EditModal } from "components/Modal/EditModal.jsx";
import { RemoveModal } from "components/Modal/RemoveModal.jsx";
class Brand extends Component {
  state = {
    brands: [
      {
        brand_id: 999,
        brand_name: "BH",
        cancel_flag: "Y",
        created_at: "test",
        updated_at: "test",
        update_by: "test"
      }
    ],
    isEditModal: false,
    isRemoveModal: false
  };
  handleEditModal = event => {
    this.setState({ isEditModal: event });
  };

  // handleRemoveModal = event =>{
  //   this.
  // }

  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };

  handleClick() {
    var i = 0;
    this.setState((i = 1));
  }

  componentDidMount = () => {
    axios.get("http://127.0.0.1:8000/api/hongbrand").then(response => {
      this.setState({
        brands: response.data
      });
    });
  };
  render() {
    var number = -1;
    var i = 0;
    // for(var i = 0; i < tdArray.length ; i++){
    //   number = "checkbox" + i;
    // }
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    return (
      <div className="content">
        <EditModal
          isEditModal={this.state.isEditModal}
          handleEditModal={this.handleEditModal}
        />
        <Grid fluid>
          <Row>
            <Col md={12}>
              {/* <Button bsStyle="info" pullRight fill type="submit">
            Add New Brand
            </Button>
            <Button bsStyle="info" pullRight fill type="submit">
              Delete 
            </Button> */}
              <Card
                title="ALL Brands"
                category="ประเภทของแบรนด์"
                ctTableFullWidth
                ctTableResponsive
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
                      {this.state.brands.map(brand => (
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
                                onClick={() => this.handleEditModal(true)}
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
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Brand;
