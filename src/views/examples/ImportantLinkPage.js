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
import ImportantLinkPage from "components/Headers/ImportantLinkPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ImportantLinkPages() {
 
  return (
    <>
      <ExamplesNavbar />
      <ImportantLinkPage />
      <div className="main">
      </div>
      <DemoFooter />
    </>
  );
}

export default ImportantLinkPages;
