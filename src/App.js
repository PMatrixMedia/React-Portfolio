import React, { Component } from 'react';
import './App.css';
import intro from './Components/intro';
import { BrowserRouter as Router, Route } from 'react-router-dom';




class App extends Component {

  



    render() {
      
        return (
            <div className="App">
            <wrapper>
            <Router>
                <React.fragment>
                    <intro>
                         <Route exact path="/" />
                         <Route exact path="/about"/>
                         <Route exact path="/projects" />
                         <Route exact path="/contact" />
                         <Route exact path="/VR"/>                        
                    </intro>
                </React.fragment>
            </Router> 
            </wrapper>      
        </div>
   
    );
   
}
 };



 export default App;