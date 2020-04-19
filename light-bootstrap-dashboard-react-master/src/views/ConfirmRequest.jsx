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
// import axios from "axios";
import { Grid, Row, Col, Button } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
// import Button from "components/CustomButton/CustomButton.jsx";
const ConfirmRequest = (props) =>{
  
  const item = props.item
  const problem = props.problem

  // submitProblem=()=> {
  //   console.log("hi sub")
  // }
  return (
    <div className="content" style={{ backgroundColor: "#EDE7E7" }}>
      <Grid fluid>
          <Row style={{ marginBottom:100 }}></Row>
        <Row>
          <Col>
            <Card
              md={12}
              title="Confirm your request"
              ctTableFullWidth
              ctTableResponsive
              content={
                <div>
                  <Row>
                    <Col xs={4} md={4}>
                      Room
                    </Col>
                    <Col xs={1} md={1}>
                      :
                    </Col>
                    <Col xs={6} md={6}>
                      Library
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4}>
                      Item Code
                    </Col>
                    <Col xs={1} md={1}>
                      :
                    </Col>
                    <Col xs={6} md={6}>
                      FCU2-31
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4}>
                      Item Name
                    </Col>
                    <Col xs={1} md={1}>
                      :
                    </Col>
                    <Col xs={6} md={6}>
                      เครื่องปรับอากาศ
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={4} md={4}>
                      Problem
                    </Col>
                    <Col xs={1} md={1}>
                      :
                    </Col>
                    <Col xs={6} md={6}>
                      น้ำแอร์หยด
                    </Col>
                  </Row>
                  <Row style={{ marginTop: 30 }}>
                    <Col xs={3} md={3} />
                    <Col xs={6} md={6}>
                        
                      <Button bsStyle="info" onClick={()=>this.submitProblem}>
                        Confirm
                      </Button>
                    </Col>
                    <Col xs={3} md={3} />
                  </Row>
                </div>
              }
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default ConfirmRequest;
