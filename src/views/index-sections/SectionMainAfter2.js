import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionMainAfter2() {
  return (
    <>
      <div className="section3"      
      style={{
        backgroundImage: "url(" + require("assets/img/landingPage22.jpg") + ")"
      }}>
        <Container>
          <Row>
          <Col lg="6" md="12">
              <div className="icons-container" style={{marginBottom:'60px'}}>
              <img
              alt="..."
              className="img-thumbnail2 img-responsive"
              src={require("assets/img/landing1.jpg")}
              style={{width:'300px'}}
                />
              </div>
            </Col>
            <Col lg="6" md="12">
              <h2 className="title"><b>Share your Memories</b></h2>
              <br />
              <p className="description" style={{color:'black'}}>
                Add your friends/relatives, tag them in photos, share a memory with them.
                With these features, you can stay connected and up to date with your loved ones. 
              </p>
              <br />
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionMainAfter2;
