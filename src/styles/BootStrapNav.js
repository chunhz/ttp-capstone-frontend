
import React,{Component} from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #424242;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #9fffcb;
    &:hover {
      color: rgb(188, 178, 233);
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9fffcb;
    &:hover {
      color: rgb(188, 178, 233);
    }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
class BootStrapNav extends Component{

render(){

return(
  <div>
    
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">WiFi Finder•NYC</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        {/* <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
        </Form> */}
      {/* </PlacesAutocomplete> */}

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Add">Add WiFi</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/victorFFFF/NYC_Wifi_Finder">
              GitHub
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
  </div>

);

      }
    }  
    export default BootStrapNav;