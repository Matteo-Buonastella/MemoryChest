import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import FamilyTreePage from "components/Headers/FamilyTreePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function FamilyTreePages() {
 
  return (
    <>
      <ExamplesNavbar />
      <FamilyTreePage />
      <div className="main">
      </div>
      <DemoFooter />
    </>
  );
}

export default FamilyTreePages;
