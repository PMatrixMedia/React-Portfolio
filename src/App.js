import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Route, redirect} from react-router;
import wrapper from "./components/wrapper";
import navbar from "./components/navbar";
import { Menu, Icon } from 'antd';
import './App.css';

class App extends Component {

    handleOnClick = () => {
        this.setState({redirect:true});
    }






    render() {
        if (this.state.redirect) {
            return <Redirect push to="/main" />
        }
        return (
            <Router>
                <wrapper>
                    <Route exact path="/" component={} />
                    <Route exact path="/about" component={} />
                    <Route exact path="/projects" Component={carousel} />
                    <Route exact path="/contact" component={contact} />
                    <Route exact path="/VR"/>
                        <React.fragment className="App">
                           </navbar>
                           </jumbotron>
                           <button onClick={this.handleOnclick} type="button" class="btn btn-outline-warning" btn-lg>Enter Phase Matrix Media</button>
                        </React.fragment>
                </wrapper>
            </Router>
        );
    }
}

export default App;