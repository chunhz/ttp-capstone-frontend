import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import AddHotspotForm from "../components/AddHotspotForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MapComponent from "../components/MapComponent";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <div>
        <Navbar color="dark" dark expand="md" className="mb-5">
          <NavbarBrand href="/">WiFi Finder</NavbarBrand>
          {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar> */}
          <Nav className="ml-auto" navbar>
            <NavItem>
              {/* href="/add" */}
              <NavLink href="#add">WiFi Add+</NavLink>
            </NavItem>
          </Nav>
          {/* </Collapse> */}
        </Navbar>
        <Switch>
          <Route path="/">
            <MapComponent />
          </Route>
          <Route path="/add">
            <AddHotspotForm />
          </Route>
          <Route path="https://github.com/BayardoZelaya/ttp-capstone-frontend"></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default NavBar;
