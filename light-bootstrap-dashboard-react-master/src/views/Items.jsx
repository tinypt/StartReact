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
import _ from "lodash";
import Card from "components/Card/Card.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import { thItemArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class Items extends Component {
  state = {
    items: [],
    isEditModal: false,
    isRemoveModal: false
    // isLoading: true
  };
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
    axios.get(`${process.env.REACT_APP_BE}/items`).then(response => {
      this.setState({
        items: response.data.items
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
                title="ALL Items"
                category="ครุภัณฑ์ทั้งหมด"
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
                        {thItemArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    {/* {this.state.isLoading ? (
                      <div class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : ( */}
                    <tbody>
                      {_.map(this.state.items, item => (
                        <tr key={item.item_id}>
                          <th>
                            <Checkbox
                              number={item.item_id}
                              key={item.item_id}
                              isChecked={i === 1 || i === 2 ? true : false}
                            ></Checkbox>
                          </th>
                          <td>{item.item_id}</td>
                          <td>{item.item_code}</td>
                          <td>{item.item_name}</td>
                          <td>{item.room.building.building_name}</td>
                          <td>{item.room.room_name}</td>
                          <td>{item.item_type.type_name}</td>
                          {item.brand_id == null ? <td></td> : <td>{item.brand.brand_name}</td>}
                          <td>{item.serial_number}</td>
                          <td>{item.model}</td>
                          <td>{item.created_at}</td>
                          <td>{item.updated_at}</td>
                          <td>{item.update_by}</td>
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
                                onClick={() => this.handleRemoveModal(true)}
                              >
                                <i className="fa fa-times" />
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    {/* )} */}
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

export default Items;
