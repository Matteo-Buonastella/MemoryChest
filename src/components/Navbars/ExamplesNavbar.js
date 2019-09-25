import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";

// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";

function ExamplesNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
    <Container>
      <div className="navbar-translate">
        <NavbarBrand
          data-placement="bottom"
          href="/index"
          target="_blank"
        >
          Memory Chest
        </NavbarBrand>
        <button
          aria-expanded={navbarCollapse}
          className={classnames("navbar-toggler navbar-toggler", {
            toggled: navbarCollapse
          })}
          onClick={toggleNavbarCollapse}
        >
          <span className="navbar-toggler-bar bar1" />
          <span className="navbar-toggler-bar bar2" />
          <span className="navbar-toggler-bar bar3" />
        </button>
      </div>
      <Collapse
        className="justify-content-end"
        navbar
        isOpen={navbarCollapse}
      >
        <Nav navbar>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="/memory-page"
            >
              <p>Memory</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="familytree-page"
            >
              <p>Family Tree</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="/importantLink-page"
            >
              <p>Important Links</p>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              data-placement="bottom"
              href="/settings"
            >
              <p>Settings</p>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
  );
}

export default ExamplesNavbar;
