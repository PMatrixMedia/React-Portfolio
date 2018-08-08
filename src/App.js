import React, { Component } from 'react';
import './App.css';
import navbar from './Components/navbar'
import wrapper from './Components/wrapper';
import jumbotron from './Components/jumbotron';
import { BrowserRouter as Router, Route } from 'react-router-dom';




class App extends Component {

    handleOnClick(){
        console.log("open sesame")
    }



    render() {
      
        return (
            <div className="App">
            <wrapper>
            <Router>
                <React.fragment>
                    <jumbotron>
                         <Route exact path="/" />
                         <Route exact path="/about"/>
                         <Route exact path="/projects" />
                         <Route exact path="/contact" />
                         <Route exact path="/VR"/>                       
                         <button onClick={this.handleOnclick} type="button" class="btn btn-outline-warning" btn-lg>Enter Phase Matrix Media</button> 
                    </jumbotron>
                </React.fragment>
            </Router> 
            </wrapper>      
        </div>
   
    );
   
}
 };



 export default App;