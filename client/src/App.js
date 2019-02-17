import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Searched from './components/Searched';
import Saved from './components/Saved';
import Books from './components/Books';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return
    <Router>
      <div>
        <NavBar />;
        <Jumbotron />;
      <Route exact path="/" Component={Searched} />
        <Route exact path="/saved" Component={Saved} />
      </div>
    </Router>;
  }
};

export default App;
