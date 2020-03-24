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
import { Row, Col } from "react-bootstrap";

export class Card extends Component {
  render() {
    return (
      <div className={"card" + (this.props.plain ? " card-plain" : "")}>
        <Row>
          <Col md={9}>
            <div
              className={"header" + (this.props.hCenter ? " text-center" : "")}
            >
              <h4 className="title">{this.props.title}</h4>
              <p className="category">{this.props.category}</p>
            </div>
          </Col>
          <Col md={1}>
            <div
              className="buttonAdd"
              style={{ marginTop: 15, marginLeft: 10 }}
            >
              {this.props.buttonAdd}
            </div>
          </Col>
          <Col md={2}>
            <div
              className="buttonDel"
              style={{ marginTop: 15, marginLeft: 20 }}
            >
              {this.props.buttonDel}
            </div>
          </Col>
        </Row>

        <div
          className={
            "content" +
            (this.props.ctAllIcons ? " all-icons" : "") +
            (this.props.ctTableFullWidth ? " table-full-width" : "") +
            (this.props.ctTableResponsive ? " table-responsive" : "") +
            (this.props.ctTableUpgrade ? " table-upgrade" : "")
          }
        >
          {this.props.content}

          <div className="footer">
            {this.props.legend}
            {this.props.stats != null ? <hr /> : ""}
            <div className="stats">
              <i className={this.props.statsIcon} /> {this.props.stats}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
