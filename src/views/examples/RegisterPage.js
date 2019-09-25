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

  if (ReactDOM.findDOMNode(this.refs.Email).value == "") {
    ReactDOM.findDOMNode(this.refs.Email).style.backgroundColor = "red";
    entryPoint = false; 
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
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>First Name</label>
                  <Input ref="FirstName" placeholder="First Name" type="text" />
                  <label>Last Name</label>
                  <Input ref="LastName" placeholder="Last Name" type="text" />
                  <label>Email</label>
                  <Input ref="Email" placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input ref="Password" placeholder="Password" type="password" />

                  <label>Birthday</label>
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
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
