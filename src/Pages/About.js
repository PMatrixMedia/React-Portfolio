import React, { Component } from "react";
import RSnavbar from "../Components/RSnavbar/RSnavbar";
import Main from "../Components/Main";
import ReactDOM from "react-dom";
import { Jumbotron, Container } from "reactstrap";

const Page = ({
  RSnavbar,
  Jumbotron,
  Container,
  onClick,
  button,
  BtnClick
}) => (
  <div>
    <React.Fragment />
  </div>
);

export default class About extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <RSnavbar />
        <Jumbotron Fluid>
          <Container fluid>
            <h1>About Me</h1>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

ReactDOM.render(<About />, document.getElementById("root"));
