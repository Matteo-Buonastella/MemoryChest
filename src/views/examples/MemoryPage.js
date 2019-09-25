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
import MemoryPageHeader from "components/Headers/MemoryPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function MemoryPage() {
 
  return (
    <>
      <ExamplesNavbar />
      <MemoryPageHeader />
      <div className="main">
      </div>
      <DemoFooter />
    </>
  );
}

export default MemoryPage;
