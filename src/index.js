import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/css/base.css";
import "assets/css/formats.css";
// pages
import Index from "views/Index.js";
import MemoryPage from "views/examples/MemoryPage.js";
import FamilyTreePage from "views/examples/FamilyTreePage.js";
import ImportantLinkPage from "views/examples/ImportantLinkPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import Page404 from "views/examples/404Page.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={props => <Index {...props} />} />
      <Route
        path="/memory-page"
        render={props => <MemoryPage {...props} />}
      />
      <Route
        path="/importantLink-page"
        render={props => <ImportantLinkPage {...props} />}
      />
    <Route
        path="/familytree-page"
        render={props => <FamilyTreePage {...props} />}
      />
      <Route
        path="/register-page"
        render={props => <RegisterPage {...props} />}
      />
      <Route
        path="/Page404-NotFound"
        render={props => <Page404 {...props} />}
      />
      <Redirect to="/Page404-NotFound" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
