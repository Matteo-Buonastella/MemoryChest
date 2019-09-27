import React, { Component } from 'react';
import ReactDatetime from "react-datetime";
import axios from 'axios';
import ReactDOM from 'react-dom';
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

class RegisterPage extends Component {
  constructor() {
    super();
    this.birth = React.createRef();
    this.state = { memories: [] ,
    UserID : "Testasdas",
    FirstName: 'Ryan', LastName:'Wilson', DOb:'1992-05-20', Email_id:'ryan@hotmail.com',status:'unverified'
    };
    this.handleSubmit = this.handleSubmit.bind(this)
}


handleSubmit(event) {

  var entryPoint = true; 
  if (ReactDOM.findDOMNode(this.refs.FirstName).value == "") {
    document.getElementById("FName").style.backgroundColor = "red";
    entryPoint = false; 
  } else {
    document.getElementById("FName").style.backgroundColor = "transparent";
  }

  if (ReactDOM.findDOMNode(this.refs.Email).value == "") {
    document.getElementById("Emails").style.backgroundColor = "red";
    entryPoint = false; 
  } else {
    document.getElementById("Emails").style.backgroundColor = "transparent";
  }

  if (ReactDOM.findDOMNode(this.refs.LastName).value == "") {
    document.getElementById("LName").style.backgroundColor = "red";
    entryPoint = false; 
  } else {
    document.getElementById("LName").style.backgroundColor = "transparent";
  }

  
  if (ReactDOM.findDOMNode(this.refs.Password).value == "") {
    document.getElementById("Passwords").style.backgroundColor = "red";
    entryPoint = false; 
  } else {
    document.getElementById("Passwords").style.backgroundColor = "transparent";
  }


  if (this.birth.current.state.inputValue == "") {
    document.getElementById("Births").style.backgroundColor = "red";
    entryPoint = false; 
  } else {
    document.getElementById("Births").style.backgroundColor = "white";
  }


   event.preventDefault()
   var data = {
    UserID: ReactDOM.findDOMNode(this.refs.Email).value,
    FirstName: ReactDOM.findDOMNode(this.refs.FirstName).value,
    LastName: ReactDOM.findDOMNode(this.refs.LastName).value,
    DOb: this.birth.current.state.inputValue, 
    Email_id: ReactDOM.findDOMNode(this.refs.Email).value,
    status: "Unverified"
  }
  if (entryPoint == true) {
  document.getElementById("formValid").innerHTML=""
  console.log(data)
  axios.post("http://localhost:8081/addUsers",data).then(function(response) {
      if (response.status >= 400) {
        console.log(response.status);
        throw new Error("Bad response from server");
      }
     console.log(response);
      
  }).then(function(data) {
        console.log("Account Successfully Added")  
  }).catch(function(err) {
      console.log(err)
  });
} else {
  document.getElementById("formValid").innerHTML="<i class='nc-icon nc-alert-circle-i'/> Fields are invalid"
}

}

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
        <Container style={{paddingBottom:'50px'}}>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                  <i className="fa fa-facebook-square" />
                  </Button>
                </div>
                <Form className="register-form">
                  <h5 id="formValid" style={{color:'red'}}></h5>
                  <label id="FName">First Name*</label>
                  <Input ref="FirstName" placeholder="First Name" type="text" />
                  <label id="LName">Last Name*</label>
                  <Input ref="LastName" placeholder="Last Name" type="text" />
                  <label id="Emails">Email*</label>
                  <Input ref="Email" placeholder="Email" type="text" />
                  <label id="Passwords">Password*</label>
                  <Input ref="Password" placeholder="Password" type="password" />

                  <label id="Births">Birthday*</label>
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker" style={{color:'red'}}>
                      <ReactDatetime
                        timeFormat={false}
                        inputProps={{
                          placeholder: "Select your birthday"
                        }}
                        dateFormat={"YYYY-MM-DD"}
                        ref={this.birth}
                      />
                      <InputGroupAddon addonType="append" style={{color:'black'}}>
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                
                 

                  <Button block className="btn-round" color="info" onClick={this.handleSubmit}>
                    Register
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
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

export default RegisterPage;
