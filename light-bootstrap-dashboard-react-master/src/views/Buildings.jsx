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
import axios from "axios";
import _ from "lodash";
import { thBuildingArray } from "variables/Variables.jsx";
class Building extends Component {
  state = {
    buildings: [],
    isEditModal: false,
    isRemoveModal: false
  };
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BE}/buildings`).then(response => {
      this.setState({
        buildings: response.data
      });
    });
  };
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
              <Card
                title="ALL Buildings"
                category="ตึกทั้งหมด"
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
                        {_.map(this.state.buildings, building => (
                          <tr key={building.brand_id}>
                            <th>
                              <Checkbox
                                number={building.brand_id}
                                key={building.brand_id}
                                isChecked={i === 1 || i === 2 ? true : false}
                              ></Checkbox>
                            </th>
                            <td>{building.building_id}</td>
                            <td>{building.building_code}</td>
                            <td>{building.building_name}</td>
                            <td>{building.created_at}</td>
                            <td>{building.updated_at}</td>
                            <td>{building.update_by}</td>
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
                        ))}
                      </tbody>
                    </Table>
                  </div>
                }
              />
               <Button bsStyle="info" fill type="submit">Import CSV</Button>
              <Button bsStyle="info" fill type="submit">Export CSV</Button>
              <Button bsStyle="simple" fill type="submit">Add Brand</Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Building;
