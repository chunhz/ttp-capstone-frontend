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
import '../styles/navStyle.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Router>
    <div>
      <Navbar color="dark" dark expand="md" className="mb-5">
        <NavbarBrand href="/">WiFi Finder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            {/* href="/add" */}
              <NavLink href="/add">
                WiFi Add+ 
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
         <Route path='/add'>
           <AddHotspotForm />
         </Route>
       </Switch>
    </div>
    </Router>
  );
};

export default NavBar;
