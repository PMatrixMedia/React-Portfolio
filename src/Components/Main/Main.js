import React from "react";
import "./style.css";
import { Jumbotron, Container } from "reactstrap";
import {Switch, Route} from 'react-router-dom';

const Main = () => {
    return (
    <Main> 
        <Switch>
            <Route exact path='/' component={Intro}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/PhaseMain' component={PhaseMain}/>
        </Switch>
    <div>
      <React.Fragment>
        <Jumbotron Fluid>
          <Container fluid>
         
          </Container>
        </Jumbotron>
      </React.Fragment>
    </div>
    </Main> 
  );
};

export default Main;
