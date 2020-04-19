import React, { Component } from "react";
import {Grid,Row,Col,Table,OverlayTrigger,Tooltip} from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { thRoomArray, tdRoomArray } from "variables/Variables.jsx";
class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
  
  // handleClick() {
  //   var i = 0;
  //   this.setState((i = 1));
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
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="ALL Rooms"
                category="ห้องทั้งหมด"
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
                    <tbody>
                      {tdRoomArray.map((prop, key) => (
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
                                // onClick={() => this.handleEditModal(true)}
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
                                // onClick={()=> this.handleRemoveModal(true)}
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

export default Room;
