import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";
import Card from "components/Card/Card.jsx";
import _ from "lodash";
import axios from "axios";
import { thStatusArray } from "variables/Variables.jsx";
class Status extends Component {
  state = {
    statuses: []
  };
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BE}/statuses`).then(response => {
      this.setState({
        statuses: response.data
      });
    });
  };

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="ALL Statuses"
                category="สถานะทั้งหมด"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <div>
                    <Table striped hover>
                      <thead>
                        <tr>
                          <th></th>
                          {thStatusArray.map((prop, key) => {
                            return <th key={key}>{prop}</th>;
                          })}
                        </tr>
                      </thead>
                      <tbody>
                      {_.map(this.state.statuses, status => (
                          <tr key={status.status_id}>
                            <th></th>
                            <td>{status.status_id}</td>
                            <td>{status.status_name}</td>
                            <td>{status.status_description}</td>
                            <td>{status.created_at}</td>
                            <td>{status.updated_at}</td>
                          </tr>
                        ))}
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
export default Status;
