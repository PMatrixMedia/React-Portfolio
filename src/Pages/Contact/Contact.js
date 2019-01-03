// JavaScript source code
import React from 'react';
import Navbar from '../../Components/navbar'
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css';

export default class Contact extends React.Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Jumbotron fluid>
        <Container fluid>
          <Form>
            <FormGroup>
            <Label for="Formname">Name</Label>
            <Input type="name" name="name" id="ContactName" placeholder="First Last " />
            </FormGroup>
            <FormGroup>
            <Label for="FormEmail">Email</Label>
            <Input type="email" name="email" id="ContactEmail" placeholder="user@address.com" />
            </FormGroup>
            <FormGroup>
            <Label for="FormText">Text Area</Label>
            <Input type="textarea" name="text" id="ContactText" placeholder="Message Text" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
      </Jumbotron>
      </div>  
    );
  }
}