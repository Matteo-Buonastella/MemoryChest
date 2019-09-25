import React from "react";

// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

// core components

function SectionMainAfter3() {
  return (
    <>
      <div className="section4"
      style={{
        backgroundImage: "url(" + require("assets/img/landingPage18.jpg") + ")"
      }}>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title"><b>Create a Family Tree</b></h2>
              <br />
              <p className="description" style={{color:'black'}}>
                Never forget your relatives and their birthdays again. Create
                a family tree to organize your relatives and Memory Chest 
                will automatically send you a reminder on their birthdays.
              </p>
              <br />
              <Button
                color="info" type="button"
                href="/register-page"
                style={{width:'100%'}}
                >
                Register Today!
              </Button>
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
              <img
              alt="..."
              className="img-thumbnail2 img-responsive"
              src={require("assets/img/landingImage23.jpg")}
              style={{width:'300px'}}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionMainAfter3;
