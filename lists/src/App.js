import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ListView.js';

import Navigation from './Navigation.js';
import Container from 'react-bootstrap/Container';
import HomeView from './HomeView.js';
import ListView from './ListView.js';
import CreateEventView from './CreateEventView.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventView from './EventView.js';
function App() {
  return (
    <>
    <Navigation/>
    <Router>
      <Container>
      <Switch>
        <Route path="/" exact component={HomeView}/>
        <Route path="/createEvent" component = {CreateEventView}/>
        <Route path="/events/:id" component = {EventView}/>
      </Switch>
      </Container>
    </Router>
    </>
  );
}

export default App;
