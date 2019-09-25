
import React from "react";

// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

// index sections
import SectionMainAfter from "views/index-sections/SectionMainAfter.js";
import SectionMainAfter2 from "views/index-sections/SectionMainAfter2.js";
import SectionMainAfter3 from "views/index-sections/SectionMainAfter3.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <div className="main" id="mainCont">
        <SectionMainAfter />
        <SectionMainAfter2 />
        <SectionMainAfter3 />
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
