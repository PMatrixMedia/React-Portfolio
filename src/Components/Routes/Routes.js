// Routes.js
import React from 'react';
import {
  Route,
  BrowserRouter as Router, // Or HashRouter
  Switch
} from 'react-router-dom';
// ... your page component imports
import Intro from '../Intro/Intro'; // Adjust the path if Intro is located elsewhere
import PhaseMain from '../../Pages/PhaseMain/PhaseMain'; // Adjust the path if PhaseMain is located elsewhere
import About from '../../Pages/About/About'; // Adjust the path if About is located elsewhere
import Contact from '../../Pages/Contact/Contact'; // Adjust the path if Contact is located elsewhere

const RoutesComponent = () => (
  <Router>  {/* Router is the top-level component here */}
    <div>   {/* Single child for Router */}
      {/* Optional: Navigation Links or Layout that's always visible */}
      <Switch> {/* Switch is a child of Router (via the div) */}
        <Route exact path="/" component={Intro} />
        <Route exact path="/main" component={PhaseMain} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <Route component={NotFoundPage} /> */}
      </Switch>
    </div>
  </Router>
);

export default RoutesComponent;