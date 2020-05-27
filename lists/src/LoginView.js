import React from 'react';
import ListItem from './ListItem.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {login} from './API.js';
import {startSession} from './Session.js';
import { Redirect } from 'react-router-dom';
class LoginView extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',password:''}
        this.handleUserChanged = this.handleUserChanged.bind(this);
        this.handlePasswordChanged = this.handlePasswordChanged.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handlePasswordChanged(event){
        this.setState({password:event.target.value});
    }
    handleUserChanged(event){
        this.setState({username:event.target.value});
    }
    handleSubmit(event){
        login(this.state.username,this.state.password).then(data=>{
            console.log(data);
            if(data.authentication){
            startSession(this.state.username,data.id,data.authKey);
            
            }else{
                //show error
            }
        });
        event.preventDefault();
    }
    render(){
        return(
            <Container class="innerContainer">
                 <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="eventTitle">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleUserChanged} />
                    </Form.Group>

                    <Form.Group controlId="eventDate">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control name="password" type="password" onChange={this.handlePasswordChanged} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
        );
    }
}
export default LoginView;