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
import { Grid, Row, Col, Table,OverlayTrigger,
  Tooltip } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import { thItemArray, tdItemArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
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
                    <tbody>
                      {tdItemArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <th>
                            <Checkbox
                                  number={key}
                                  key={key}
                                  isChecked={i === 1 || i === 2 ? true : false}
                                ></Checkbox>
                            </th>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <td>
                              <OverlayTrigger placement="top" overlay={edit}>
                                <Button
                                  bsStyle="info"
                                  simple
                                  type="button"
                                  bsSize="xs"
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
                        );
                      })}
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

export default Items;
