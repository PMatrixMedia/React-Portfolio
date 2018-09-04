// JavaScript source code
import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Contact extends React.Component {
  render() {
    return (
      <Form>
      <FormGroup>
          <Label for="Formname">Name</Label>
          <Input type="name" name="name" id="ContactName" placeholder="Name Goes Here" />
        </FormGroup>
        <FormGroup>
          <Label for="FormEmail">Email</Label>
          <Input type="email" name="email" id="ContactEmail" placeholder="user@address.com" />
        </FormGroup>
        <FormGroup>
          <Label for="FormText">Text Area</Label>
          <Input type="textarea" name="text" id="ContactText" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}