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
            <h2>Quick Update: 11/12/2019:  Published an example app over on my VR page for the workshop I am giving on react360 for the global vr day.  Should have alot of video footage and pics of the event that I plan to post here on this site.</h2>
             <h3>You can access the page by clicking on the blog button at the top.</h3>
            </Container>
          </Jumbotron>
          </React.Fragment>
      );
    }
  }

ReactDOM.render(<PhaseMain />, document.getElementById("root"));

export default PhaseMain;