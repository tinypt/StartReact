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
import { Grid, Row, Col, DropdownButton, MenuItem } from "react-bootstrap";
// import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";

class MobileSendProblem extends Component {
  constructor(props) {
    super(props);

    this.dropdownHandel = this.dropdownHandel.bind(this);
    this.submitSendHandle = this.submitSendHandle.bind(this);
    this.problemInputChangedHandler = this.problemInputChangedHandler.bind(
      this
    );
  }
  state = {
    item: {},
    problemDes: [
      { value: "option1", key: "1" },
      { value: "option2", key: "2" },
      { value: "option3", key: "3" }
    ],
    titleDropdown: "Select Problem",
    showInputProblem: false
  };

  dropdownHandel = value => {
    const valuePro = value.value;
    console.log(value.value);
    this.setState({
      titleDropdown: valuePro
    });
    this.toggleInputProblemHandler(value.key);
    console.log("hi you");
  };

  toggleInputProblemHandler = key => {
    if (key === 3) {
      const doesShow = this.state.showInputProblem;
      this.setState({
        showInputProblem: !doesShow
      });
    } else {
      this.setState({
        showInputProblem: false
      });
    }
  };

  problemInputChangedHandler = event => {
    console.log(event.target.value);
  };

  submitSendHandle = (event) => {
    event.preventDefault();
    const id = {
      item_id: this.state.item.item_id
    };
    console.log("submit");
    axios.post(
        "http://127.0.0.1:8000/api/send-problem/check",
        id
      )
      .then(response => {
        console.log("post : " , response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    const code = this.props.match.params.id;
    axios
      .get("http://127.0.0.1:8000/api/send-problem/" + code).then(response => {
        this.setState({
          item: response.data
        });
      })
      .catch(error => this.setState({ error }));
  };
  render() {
    return (
      <div className="content" style={{ backgroundColor: "#EDE7E7" }}>
        <Grid>
          <Row>
            <Col>
              <h1>Send Problem</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>แจ้งปัญหาการใช้งานครุภัณฑ์ชำรุด</h5>
            </Col>
          </Row>
          <form onSubmit={(event)=>this.submitSendHandle(event)}>
            <Row>
              <Col>
                <FormInputs
                  ncols={["col-md-5"]}
                  properties={[
                    {
                      label: "Room:",
                      type: "text",
                      bsClass: "form-control",
                      defaultValue: this.state.item.room_id,
                      disabled: true
                    }
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInputs
                  ncols={["col-md-5"]}
                  properties={[
                    {
                      label: "Item Code:",
                      type: "text",
                      bsClass: "form-control",
                      defaultValue: this.state.item.item_code,
                      disabled: true
                    }
                  ]}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInputs
                  ncols={["col-md-5"]}
                  properties={[
                    {
                      label: "Item Name:",
                      type: "text",
                      bsClass: "form-control",
                      defaultValue: this.state.item.item_name,
                      disabled: true
                    }
                  ]}
                />
              </Col>
            </Row>
            <Row>Problem:*</Row>
            <Row>
              <Col>
                <DropdownButton title={this.state.titleDropdown} id="problemSend">
                  {this.state.problemDes.map(problem => {
                    return (
                      <MenuItem
                        key={problem.key}
                        value={problem.key}
                        onClick={() => this.dropdownHandel(problem)}
                      >
                        {problem.value}
                      </MenuItem>
                    );
                  })}
                </DropdownButton>
              </Col>
            </Row>
            {this.state.showInputProblem === true ? (
              <Row>
                <Col>
                  <FormInputs
                    ncols={["col-md-12"]}
                    properties={[
                      {
                        type: "text",
                        bsClass: "form-control",
                        placeholder: "ใส่ข้อมูลปัญหาอื่นๆ"
                      }
                    ]}
                    componentClass="textarea"
                    changed={this.problemInputChangedHandler}
                  />
                </Col>
              </Row>
            ) : null}

            <Row style={{ marginTop: 50 }}>
              <Col xs={4} md={4} />
              <Col xs={4} md={4}>
                <Button bsStyle="info" fill type="submit">
                  Submit
                </Button>
              </Col>
              <Col xs={4} md={4} />
            </Row>
          </form>
        </Grid>
      </div>
    );
  }
}

export default MobileSendProblem;
