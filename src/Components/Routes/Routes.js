/* eslint-disable no-unused-vars */
import React from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Intro from '../Intro/Intro';
import Template from '../Template/Template';
import Contact from '../../Pages/Contact/Contact.js'
import PhaseMain from '../../Pages/PhaseMain/PhaseMain'
import About from '../../Pages/About/About' ;
import './routes.css'

const Routes = () => (
    <Router>
        <React.Fragment>
            <Link to="/"></Link>
            <Link to="/about"></Link>
            <Link to="/main"></Link>
            <Link to="/contact"></Link>
            <Route exact path="/" component={Intro}/>
            <Route exact path="/main" component={PhaseMain}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>>
        </React.Fragment>
    </Router>
  )

  export default Routes