import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="hotspotName">Hotspot Name</Label>
        <Input type="text" name="text" id="hotspotName"/>
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" name="text" id="address" />
      </FormGroup>
      <FormGroup>
        <Label for="zipCode">Address</Label>
        <Input type="text" name="text" id="zipCode" />
      </FormGroup>
      <FormGroup>
        <Label for="hotspotType">Select</Label>
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

export default Example;