import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import AddHotspotForm from '../components/AddHotspotForm'
import App from '../App'
import '../styles/navStyle.css'
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let formDisplay = false;
  const toggle = () => setIsOpen(!isOpen);
  // const formDisplay = false;
  
  return (
    <div>
      <Navbar color="dark" dark expand="md" className="mb-5">
        <NavbarBrand href="/">WiFi Finder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            {/* href="/add" */}
              <NavLink href="/add" onClick={ formDisplay=true} component={<AddHotspotForm />}  >
                WiFi Add+ 
              {formDisplay ? <AddHotspotForm /> : <App/>}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
