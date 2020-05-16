import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ListView.js';

import Navigation from './Navigation.js';
import Container from 'react-bootstrap/Container';
import HomeView from './HomeView.js';
import ListView from './ListView.js';
function App() {
  return (
    <>
    <Navigation/>
    <Container>
      <HomeView/>
    </Container>
    </>
  );
}

export default App;
