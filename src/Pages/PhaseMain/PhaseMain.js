
import React, { Component } from "react";
import Navbar from '../../Components/navbar/navbar';
import ReactDOM from "react-dom";
import { Jumbotron, Container, Media } from "reactstrap";
import './antd.css';
import "./style.css";




  class PhaseMain extends Component {
    constructor(props) {
      super();
    }
    render() {
      return (
        <div>
        <React.Fragment>
          <Navbar/>
          <div>
          <Jumbotron Fluid className="Jumbotron">
            <Container Fluid className="container">
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
            </Container>
          </Jumbotron>
          </div>
          </React.Fragment>
        </div>
      );
    }
  }

ReactDOM.render(<PhaseMain />, document.getElementById("root"));

  export default PhaseMain;