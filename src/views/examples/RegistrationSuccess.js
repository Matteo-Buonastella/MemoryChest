import React, { Component } from 'react';
import ReactDatetime from "react-datetime";
import axios from 'axios';
import ReactDOM from 'react-dom';
import $ from 'jquery';
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
 } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/IndexNavbar.js";

const nodemailer = require('nodemailer');

class RegistrationSuccess extends Component {
  render() {
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Success</h3>    
                <h3 className="title mx-auto">Your account has been created</h3>          
                  <Button block className="btn-round" color="info" href="/index">
                    Login
                  </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
           
          </h6>
        </div>
      </div>
    </>
  );
}
}

export default RegistrationSuccess;
