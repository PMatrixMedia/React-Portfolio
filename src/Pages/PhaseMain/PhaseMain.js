/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Navbar from '../../Components/navbar/navbar';
import ReactDOM from 'react-dom';
import { Jumbotron, Container } from 'reactstrap';
import "../../antd.css";
import "./style.sass";
import "../../scss/bootstrap.scss";




  class PhaseMain extends Component {

    render() {
      return (
        
        <React.Fragment>
          <Navbar/>
          <Jumbotron Fluid className="Jumbotron">
            <Container Fluid className="news-container">
            <h2>I decided to use facebook for the blogging, so that I can also use facebook/instagram and facebook live for events related to vr/ar and other things on the site.  Stay tuned for more update and content soon.</h2>
             <h3>You can access the page by clicking on the blog button at the top.</h3>
            </Container>
          </Jumbotron>
          </React.Fragment>
      );
    }
  }

ReactDOM.render(<PhaseMain />, document.getElementById("root"));

export default PhaseMain;