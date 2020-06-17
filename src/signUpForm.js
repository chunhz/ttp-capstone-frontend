import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './form.css'
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';


const Example = (props) => {
  return (
    <Form className='signup-form'>
       <h1 className='text-center'>Sign Up</h1>
        <FormGroup>
            <Label >First Name:</Label>
            <Input type="text" name="firstname" id="firstname" />
        </FormGroup>
        <FormGroup>
            <Label >Last Name:</Label>
            <Input type="text" name="lastname" id="lastname" />
        </FormGroup>

        <FormGroup>
            <Label f>Email</Label>
            <Input type="email" name="email" id="email" />
        </FormGroup>
        <FormGroup>
            <Label >Password</Label>
            <Input type="password" name="password" id="password1"  />
        </FormGroup>
        <FormGroup>
            <Label >ReEnter Password</Label>
            <Input type="password" name="password" id="password2" />
        </FormGroup>
      <Button>Sign in</Button>
    </Form>
  );
}

export default Example;