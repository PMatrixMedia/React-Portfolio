import React, { Component } from 'react';
import Button from 'antd/lib/button';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
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
        );
    }
}

export default App;