import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ListView.js';

import Navigation from './Navigation.js';
import Container from 'react-bootstrap/Container';
import ListView from './ListView.js';
function App() {
  return (
    <>
    <Navigation/>
    <Container>
      <ListView/>
    </Container>
    </>
  );
}

export default App;
