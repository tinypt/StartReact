import React, { Component } from "react";
import _ from "lodash";
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
import { thRoomArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { EditModal } from "components/Modal/EditModal.jsx";
import { RemoveModal } from "components/Modal/RemoveModal.jsx";
class Room extends Component {
  state = {
    rooms: [],
    isEditModal: false,
    isRemoveModal: false,
    isLoading: true
  };

  handleEditModal = event => {
    this.setState({ isEditModal: event });
  };
  handleRemoveModal = event => {
    this.setState({ isRemoveModal: event });
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
    axios.get(`${process.env.REACT_APP_BE}/rooms`).then(response => {
      console.log(response.data)
    
      this.setState({
        rooms: response.data.rooms,
        isLoading: false,
      });
    });
  };
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
        {/* <EditModal
          isEditModal={this.state.isEditModal}
          handleEditModal={this.handleEditModal}
        />
        <RemoveModal
          isRemoveModal={this.state.isRemoveModal}
          handleRemoveModal={this.handleRemoveModal}
        /> */}
        <Grid fluid>
          <Row>
            <Col md={12}>
              {/* <Button bsStyle="info" pullRight fill type="submit">
            Add New Room
            </Button>
            <Button bsStyle="info" pullRight fill type="submit">
              Delete 
            </Button> */}
              <Card
                title="ALL Rooms"
                category="ประเภทของห้อง"
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
                        {thRoomArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    {this.state.isLoading ? (
                      <div class="spinner-border text-info" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <tbody>
                        {_.map(this.state.rooms, room => (
                          <tr key={room.room_id}>
                            <th>
                              <Checkbox
                                number={room.room_id}
                                key={room.room_id}
                                isChecked={i === 1 || i === 2 ? true : false}
                              ></Checkbox>
                            </th>
                            {/* {console.log(room.building)} */}
                            <td>{room.room_id}</td>
                            <td>{room.room_code}</td>
                            <td>{room.room_name}</td>
                            <td>{room.building.building_name}</td>
                            <td>{room.created_at}</td>
                            <td>{room.updated_at}</td>
                            <td>{room.update_by}</td>
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
                    )}
                  </Table>
                }
              />
              <Button bsStyle="info" fill type="submit">
                Import CSV
              </Button>
              <Button bsStyle="info" fill type="submit">
                Export CSV
              </Button>
              <Button bsStyle="simple" fill type="submit">
                Add Room
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Room;
