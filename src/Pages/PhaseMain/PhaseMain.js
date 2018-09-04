
import React, { Component } from "react";
import Navbar from '../../Components/Navbar/Navbar';
import ReactDOM from "react-dom";
import { Jumbotron, Container, Media } from "reactstrap";
import "./style.css";








const Page = ({ Navbar, Jumbotron, Container, onClick }) => (
    <div>
      <React.Fragment />
    </div>
  );
  


 export default class PhaseMain extends Component {
    constructor(props) {
      super();
    }
    render() {
      return (
        <div>
          <Navbar className="Nav" />
          <Jumbotron Fluid className="Jumbotron">
            <Container fluid className="container">
        
            </Container>
          </Jumbotron>
        </div>
      );
    }
  }


  