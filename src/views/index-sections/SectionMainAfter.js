import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionMainAfter() {
  return (
    <>
      <div className="section4" 
      style={{
        backgroundImage: "url(" + require("assets/img/landingPage10.jpg") + ")"
      }}>

        <Container>
          <Row>
            <Col lg="5" md="12">
              <h2 className="title"><b>Save & Reminise on the Past</b></h2>
              <br />
              <p className="description" style={{color:'black'}}>
                Suddenly remembered a memory of the past and would like to save it?
                Whether it is a birthday, event or a precious memory, 
                Memory Chest allows you to store your memories for another day.
              </p>
              <br />
            </Col>
            <Col lg="6" md="12" style={{marginTop:'50px',marginBottom:'50px'}}>
              <div className="icons-container">
              <img
              alt="..."
              className="img-thumbnail2 img-responsive"
              src={require("assets/img/landingImage22.jpg")}
              style={{width:'350px'}}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </>
  );
}

export default SectionMainAfter;
