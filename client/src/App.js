import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import {
  HomePage,
  AboutMePage,
  ProjectsPage,
  ContactMePage
}from './Pages';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/AboutMe" component={AboutMePage}></Route>
        <Route path="/Projects" component={ProjectsPage}></Route>
        <Route path="/ContactMe" component={ContactMePage}></Route>
      </Switch>
    );
  }
}

export default App;