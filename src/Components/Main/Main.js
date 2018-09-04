import React from "react";
import "./style.css";
import { Jumbotron, Container } from "reactstrap";


const Main = () => {
    return (
    <Main> 
     <div>
      <React.Fragment>
        <Jumbotron Fluid>
          <Container fluid>
                {this.props.child}
          </Container>
        </Jumbotron>
      </React.Fragment>
    </div>
    </Main> 
  );
};

export default Main;
