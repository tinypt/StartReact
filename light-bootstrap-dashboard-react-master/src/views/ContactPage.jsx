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
import { Grid, Row, Col } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
class ContactPage extends Component {
  state = {};
  render() {
    return (
      <div className="content" style={{ backgroundColor: "#EDE7E7" }}>
        <Grid fluid>
            <Row style={{ marginBottom:100 }}></Row>
          <Row>
            <Col>
              <Card
                md={12}
                content={
                  <div>
                      <Row>
                          <Col className="text-center">
                              <h2>THANK YOU.</h2>
                          </Col>
                      </Row>
                    <Row>
                      <Col className="text-center">
                      <p>
                          ปัญหาของคุณถูกส่งแล้ว <br/>
                          สามารถดูสถานะได้ที่ <br/>
                          <b>www.google.com</b>
                      </p>
                      </Col>
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
}

export default ContactPage;
