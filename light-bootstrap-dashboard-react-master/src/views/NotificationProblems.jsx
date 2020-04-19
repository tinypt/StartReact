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
import { thNotiProblemArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { EditModal } from "components/Modal/EditModal.jsx";
import { RemoveModal } from "components/Modal/RemoveModal.jsx";
import _ from "lodash";
class NotiProblem extends Component {
  state = {
    notiProblems: [],
    isLoading: true
  };

  handleClick() {
    var i = 0;
    this.setState((i = 1));
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BE}/noti_problems`).then(response => {
      this.setState({
        notiProblems: response.data.noti_problems,
        isLoading: false,
      });
    });
  };
  render() {
    const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    return (
      <div className="content">
        
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="ALL Notification Problems"
                category="รายการปัญหาที่ถูกแจ้งเข้ามาทั้งหมด"
                ctTableFullWidth
                ctTableResponsive
               
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th></th>
                        {thNotiProblemArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                    {_.map(this.state.notiProblems, notiProblem => (
                          <tr key={notiProblem.noti_id}>
                            
                            <th>

                            </th>
                            <td>{notiProblem.item_id}</td>
                            <td>{notiProblem.item.item_code}</td>
                            <td>{notiProblem.status.status_name}</td>
                            <td>{notiProblem.problem_description}</td>
                            <td>{notiProblem.created_at}</td>
                            <td>{notiProblem.updated_at}</td>
                            <td>{notiProblem.update_by}</td>
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

export default NotiProblem;
