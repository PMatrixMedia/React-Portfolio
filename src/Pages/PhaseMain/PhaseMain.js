/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../../Components/navbar/navbar';
import ReactDOM from 'react-dom';
import { Jumbotron, Container } from 'reactstrap';
import '../../antd.css';
import "./style.css";
import '../../bootstrap.css';




  class PhaseMain extends Component {

    render() {
      return (
        
        <React.Fragment>
          <Navbar/>
          <Jumbotron Fluid className="Jumbotron">
            <Container Fluid className="container">
            <h1>I decided to use facebook for the blogging, so that I can also use facebook/instagram and facebook live for events related to vr/ar and other things on the site.  Stay tuned for more update and content soon.</h1>
             <p>You can access the page by clicking on the blog button at the top.</p>
            </Container>
          </Jumbotron>
          </React.Fragment>
      );
    }
  }

ReactDOM.render(<PhaseMain />, document.getElementById("root"));

export default PhaseMain;