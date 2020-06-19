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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddHotspotForm from '../components/AddHotspotForm.jsx'
import App from '../App'
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  let formDisplay = false;
  const toggle = () => setIsOpen(!isOpen);
  // const formDisplay = false;
  
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
            {/*  */}
              <NavLink href='/add'>
                WiFi Add+ 
                {/* <AddHotspotForm  onClick={ formDisplay=true}/> */}
              {/* {formDisplay ? <AddHotspotForm /> : <App/>} */}
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
