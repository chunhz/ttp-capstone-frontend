import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './form.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const hotspotForm = (props) => {
  return (
    <Form className='hotspot-form'>
       <h1 className='text-center'>Add New Hotspot</h1>
      <FormGroup>
        <Label >Hotspot Name</Label>
        <Input type="text" name="text" id="hotspotName"/>
      </FormGroup>
      <FormGroup>
        <Label >Address</Label>
        <Input type="text" name="text" id="address" />
      </FormGroup>
      <FormGroup>
        <Label >Zip Code</Label>
        <Input type="text" name="text" id="zipCode" />
      </FormGroup>
      <FormGroup>
        <Label >Select</Label>
        <Input type="select" name="select" id="hotspotType">
          <option>Free</option>
          <option>Limit Free</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

// SSID: TransitWirelessWiFi
// Provider: Transit Wireless
// Borough: Brooklyn
// Wifi-Session: Free
// Location-Type: Subway Station

export default hotspotForm;