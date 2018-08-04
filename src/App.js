import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Route, redirect} from react-router;
import wrapper from "./components/wrapper";
import navbar from "./components/navbar";
import { Menu, Icon } from 'antd';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

    handleOnClick = () => {
        this.setState({redirect:true});
    }






    render() {
        if (this.state.redirect) {
            return <Redirect push to="/main" />
        }
        return (
<<<<<<< HEAD
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
=======
            <div className="App">
                <button type="button" class="btn btn-outline-warning" btn-lg>Enter Phase Matrix Media</button>
        <Frame>
            <Router>
                <div>
                <Route path="/start" component={Start} />
                <Route path="/home" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={Contact} />
                </div>
            </Router>
        </Frame>
      </div>
    );
  }
}
            </div>
>>>>>>> 128ed6f67f3f6c28e2fa06807f5888495179d79e
        );
    }
}

export default App;