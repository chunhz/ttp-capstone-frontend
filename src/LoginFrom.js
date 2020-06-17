import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './form.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { GoogleLoginButton } from 'react-social-login-buttons';

const loginForm = (props) => {
    return (
        <Form className='login-form'>
        <h1 className='text-center'>Login</h1>
          <FormGroup>
              <Label >Email</Label>
              <Input type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup>
              <Label >Password</Label>
              <Input type="password" name="password" id="password1"  />
          </FormGroup>
        <Button className='btn-lg btn-blue btn-block'>
        Login</Button>
        <div className='text-center pt-3'>
        Or Continue with your Google account</div>
        <GoogleLoginButton className='mt-3 mb-3'/>
        <div className='text-center pt-3'>
        <a href="/sign-up">Sign Up</a>
        <span calssName="p-2">|</span>
        <a href="/forgot-password">Forgot Password</a>
        </div>
      </Form>
    )
}
export default loginForm;