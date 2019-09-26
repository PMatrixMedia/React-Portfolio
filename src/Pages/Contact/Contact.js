/* eslint-disable no-unused-vars */

import React from 'react';
import Navbar from '../../Components/navbar'
import { Jumbotron, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Contact extends React.Component {
  constructor () {
    super()

      this.state = {
        name: '',
        email:'',
        message: '',
        
      }
        this.handleChange = this.handleChange.bind(this)
  }
    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value })
      
    }

  render() {
    return (
      <div>
      <Navbar/>
      <Jumbotron fluid>
        <Container fluid>
          <Form>
            <FormGroup>
            <Label for="Formname">Name</Label>
            <Input type="name" name="name" id="ContactName" placeholder="First Last" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
            <Label for="FormEmail">Email</Label>
            <Input type="email" name="email" id="ContactEmail" placeholder="user@address.com" onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
            <Label for="FormText">Text Area</Label>
            <Input type="textarea" name="text" id="ContactText" placeholder="Message Text"onChange={this.handleChange} />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </Container>
      </Jumbotron>
      </div>  
    );
  }
}