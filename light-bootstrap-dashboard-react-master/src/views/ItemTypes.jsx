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
import {
  Grid,
  Row,
  Col,
  Table,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import axios from "axios";
import Card from "components/Card/Card.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import { thTypeArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class ItemTypes extends Component {
  state = {
    itemTypes: [{}],
    isEditModal: false,
    isRemoveModal: false
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
    axios.get("http://127.0.0.1:8000/api/item_types").then(response => {
      this.setState({
        itemTypes: response.data
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
                title="ALL ItemTypes"
                category="ประเภทของครุภัณฑ์"
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
                        {thTypeArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.itemTypes.map(itemType => (
                        <tr key={itemType.type_id}>
                          <th>
                            <Checkbox
                              number={itemType.type_id}
                              key={itemType.type_id}
                              isChecked={i === 1 || i === 2 ? true : false}
                            ></Checkbox>
                          </th>
                          <td>{itemType.type_id}</td>
                          <td>{itemType.type_name}</td>
                          <td>{itemType.created_at}</td>
                          <td>{itemType.updated_at}</td>
                          <td>{itemType.update_by}</td>
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

export default ItemTypes;
