import React from 'react';
import logo from './logo.svg';
import './App.css';
import './ListView.js';

import Navigation from './Navigation.js';
import Container from 'react-bootstrap/Container';
import HomeView from './HomeView.js';
import ListView from './ListView.js';
import CreateEventView from './CreateEventView.js';
import { BrowserRouter as Router, Route, Switch,
  Link,
  Redirect,
  useHistory,
  useLocation } from "react-router-dom";
import EventView from './EventView.js';
import CreateListView from './CreateListView.js';
import LoginView from './LoginView.js';
import { verifyToken } from './API';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {tokenStatus:"false"}
    this.requireAuth = this.requireAuth.bind(this);
  }
  async updateToken(){
    let _tokenStatus = await verifyToken();
    this.setState({tokenStatus:_tokenStatus})
  }
  requireAuth(){
    this.updateToken();
    return this.state.tokenStatus
  }
  //verifyToken();
  async componentWillMount(){
    let _tokenStatus = await verifyToken();
    this.setState({tokenStatus:_tokenStatus})
  }
  render(){
  return (
    <>
    <Navigation/>
    <Router>
      <Container>
      <Switch>
        <Route path="/" exact component={HomeView}/>
        <Route path = "/createEvent" onEnter={this.requireAuth} component={CreateEventView}/>
        <Route path="/events/:id" component = {EventView}/>
        <Route path="/createList/:id" component={CreateListView}/>
        <Route path="/login" component={LoginView}/>
        <Route path="/viewList/:id" component={ListView}/>
      </Switch>
      </Container>
    </Router>
    </>
  );
  }
}
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        this ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default App;
