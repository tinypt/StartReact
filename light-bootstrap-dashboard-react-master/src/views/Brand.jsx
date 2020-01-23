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
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import CustomCheckbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import { thBrandArray, tdBrandArray } from "variables/Variables.jsx";
import Tasks from "components/Tasks/Tasks";
import Button from "components/CustomButton/CustomButton.jsx";
class Brand extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
            <Button bsStyle="info" pullRight fill type="submit">
            Add New Brand
            </Button>
            <Button bsStyle="info" pullRight fill type="submit">
              Delete 
            </Button>
              <Card 
                title="ALL Brands"
                category="ประเภทของแบรนด์"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                     <tr>
                       
                        <th><CustomCheckbox/></th>
                        {thBrandArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                        
                      </tr>
                      
                      
                    </thead>
                    <tbody>
                      {tdBrandArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            <th><CustomCheckbox/></th>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>
                              ;
                            })}
                            <td>
                            <Button bsStyle="info" simple type="button" bsSize="xs">
                           <i className="fa fa-edit" />
                           </Button>
                           <Button bsStyle="danger" simple type="button" bsSize="xs">
                             <i className="fa fa-times" />
                          </Button>
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

export default Brand;
