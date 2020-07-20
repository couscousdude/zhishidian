import React, { Component } from 'react';
import './App.css';
import MenuNavBar from './components/Navbar';
import Feed from './components/Feed/Feed'
import Profile from './components/Profile/Profile';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MenuNavBar />
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={ Feed } />
            <Route path="/profile" exact component={ Profile } />
            <Route exact component={ PageNotFound } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;