/*eslint-disable*/
import React, { Component } from 'react';
import axios from 'axios';
// reactstrap components
import { Container, Col,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row } from "reactstrap";

import { Button} from "reactstrap";

import $ from 'jquery';
// core components



class IndexPage extends Component {
  constructor() {
    super();
    this.state = { memories: [], UserEmail: 'ryan@hotmail.com'};
    this.handleSubmit = this.handleSubmit.bind(this)
}

  componentDidMount(){

    var data = {
      UserEmail: this.state.UserEmail 
    }

    axios.get("http://localhost:8081/accountAuthentication", {
      params: {
        UserEmail: 'rwilson31@myseneca.ca',
        UserPass: 'Test123'
      }
    }).then((res) => {
         this.setState({
             memories: res.data
         });
  
     })
  }

  handleSubmit(event) {
    
    {this.state.memories.map(function (memories, index) {
      return (
          console.log(memories)
      );
  })}
  }

  render() {
  return (
      <div
      id="landingStart"
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("assets/img/memory1.jpg") + ")"
        }}
      >
        <div className="filter"/>
        <div className="content-center">
          <Container>
          
            <div className="title-brand">
              <h1 className="presentation-title">Memory Chest</h1>
            </div>
            <h2 className="presentation-subtitle text-center">
              Relive your memories in a new light
            </h2>
            <div className="title-brand" style={{marginTop:'50px'}}>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6" style={{marginBottom:'10px'}}>
              <InputGroup className="form-group-no-border">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-email-85" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Email" type="email" />
            </InputGroup>
            </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6" style={{marginBottom:'10px'}}>
              <InputGroup className="form-group-no-border">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="nc-icon nc-key-25" />
                </InputGroupText>
              </InputGroupAddon>
              <Input placeholder="Password" type="password" />
            </InputGroup>
            </Col>
            </Row>
            <div className="col-md-6 ml-auto mr-auto text-center">
            <Button
                className="btn btn-info"
                color="primary"
                outline
                onClick={this.handleSubmit}
                style={{width:'100%', marginBottom:'10px'}}
                >
                Login
              </Button>
              <Button
                className="btn btn-info"
                color="success"
                outline
                href="/register-page"
                style={{width:'100%'}}
                >
                Sign up
              </Button>
            </div>
            </div>
          </Container>
        </div>
      </div>
  );
}}

export default IndexPage;
