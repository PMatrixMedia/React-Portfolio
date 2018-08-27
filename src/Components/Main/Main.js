import React from "react";
import "./style.css";
import { Jumbotron, Container } from "reactstrap";

const Main = props => {
  return (
    <div>
      <React.Fragment>
        <Jumbotron Fluid>
          <Container fluid>
            <h1>About Me</h1>
          </Container>
        </Jumbotron>
      </React.Fragment>
    </div>
  );
};

export default Main;
