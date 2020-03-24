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
import { thProblemDescArray } from "variables/Variables.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import { EditModal } from "components/Modal/EditModal.jsx";
import { RemoveModal } from "components/Modal/RemoveModal.jsx";
class ProblemDesc extends Component {
  state = {
    problemDescs: [{}],
    isEditModal: false,
    isRemoveModal: false
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
    axios.get("http://127.0.0.1:8000/api/problem_descs").then(response => {
      this.setState({
        problemDescs: response.data.problems_descs
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
            Add New Brand
            </Button>
            <Button bsStyle="info" pullRight fill type="submit">
              Delete 
            </Button> */}
              <Card
                title="ALL Problem Description"
                category="คำอธิบายปัญหาทั้งหมด"
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
                        {thProblemDescArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.problemDescs.map(problem_Desc => (
                        <tr key={problem_Desc.problem_des_id}>
                          <th>
                            <Checkbox
                              number={problem_Desc.problem_des_id}
                              key={problem_Desc.problem_des_id}
                              isChecked={i === 1 || i === 2 ? true : false}
                            ></Checkbox>
                          </th>
                          <td>{problem_Desc.problem_des_id}</td>
                          <td>{problem_Desc.problem_description}</td>
                          <td>{problem_Desc.created_at}</td>
                          <td>{problem_Desc.updated_at}</td>
                          <td>{problem_Desc.update_by}</td>
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
              <Button bsStyle="info" fill type="submit">
                Import CSV
              </Button>
              <Button bsStyle="info" fill type="submit">
                Export CSV
              </Button>
              <Button bsStyle="simple" fill type="submit">
                Add Brand
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProblemDesc;
