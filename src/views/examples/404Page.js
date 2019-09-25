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
import Page404Header from "components/Headers/404PageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Page404() {
 
  return (
    <>
      <ExamplesNavbar />
      <Page404Header />
      <div className="main">
      </div>
      <DemoFooter />
    </>
  );
}

export default Page404;
