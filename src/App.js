// App.js
import React, { Component } from 'react';
// import logo from './logo.svg'; // Keep if you use it
import './App.css';
import Routes from './Components/Routes/Routes'; // Adjust path as needed

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* You could have a common header here, for example */}
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>My Application</h1>
        </header> */}

        <Routes /> {/* This is where your page content will be rendered based on the URL */}

        {/* You could have a common footer here */}
      </div>
    );
  }
}
export default App;