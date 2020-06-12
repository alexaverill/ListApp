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
        <PrivateRoute path="/" exact component={HomeView}/>
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
//borrowed from https://stackoverflow.com/questions/49309071/react-private-router-with-async-fetch-request
class PrivateRoute extends React.Component{
  constructor(props){
    super(props);
    this.state={loaded:false,authenticated:false}
  }
  componentWillMount(){
    this.authenticate();
  }
  authenticate(){
    verifyToken().then((data)=>{
      this.setState({authenticated:data,loaded:true});
    })
  }
  render() {
    const { component: Component, ...rest } = this.props;
    const { loaded, authenticated } = this.state;
    console.log(this.props);
    if (!loaded) return null;
    return (
      <Route
        {...rest}
        render={props => {
          return authenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
              }}
            />
          );
        }}
      />
    );
  }

}
export default App;
