import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Example = (props) => {
  return (
    <Form>
        <FormGroup>
            <Label for="exampleEmail">First Name:</Label>
            <Input type="text" name="firstname" id="firstname" />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Last Name:</Label>
            <Input type="text" name="lastname" id="lastname" />
        </FormGroup>

        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="password1"  />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">ReEnter Password</Label>
            <Input type="password" name="password" id="password2" />
        </FormGroup>
      <Button>Sign in</Button>
    </Form>
  );
}

export default Example;