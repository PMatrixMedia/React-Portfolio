/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../../Components/navbar/navbar';
import ReactDOM from 'react-dom';
import { Jumbotron, Container } from 'reactstrap';
import './antd.css';
import "./style.css";




  class PhaseMain extends Component {

    render() {
      return (
        
        <React.Fragment>
          <Navbar/>
          <Jumbotron Fluid className="Jumbotron">
            <Container Fluid className="container">
            <p>This Page is the Portal to PhaseMatrixMedia.com Once Completed it will contain internal links as well as a updated blog for the site.</p>
            </Container>
          </Jumbotron>
          </React.Fragment>
      );
    }
  }

ReactDOM.render(<PhaseMain />, document.getElementById("root"));

export default PhaseMain;