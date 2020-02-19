import React, { Component } from "react";
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
import Button from "components/CustomButton/CustomButton.jsx";

import { thBuildingArray, tdBuildingArray } from "variables/Variables.jsx";

class Building extends Component {
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

  handleClick() {
    var i = 0;
    this.setState((i = 1));
  }
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
              <Card
                title="Buildings"
                category="Here is all buildings."
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
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
                          {thBuildingArray.map((prop, key) => {
                            return <th key={key}>{prop}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        {tdBuildingArray.map((prop, key) => {
                          return (
                            <tr key={key}>
                              <td>
                                <Checkbox
                                  number={key}
                                  key={key}
                                  isChecked={i === 1 || i === 2 ? true : false}
                                ></Checkbox>
                              </td>
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

                                <OverlayTrigger
                                  placement="top"
                                  overlay={remove}
                                >
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
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Building;
