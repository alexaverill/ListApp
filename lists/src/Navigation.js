import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {getUsername} from './Session'
class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let name = getUsername();
        let showLogin = false;
        if(name == null || name.length <=0){
            showLogin = true;
        }
        return (
            
            <Navbar expand="lg">
                <Navbar.Brand href="/">List App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Events</Nav.Link>
                        <Nav.Link href="/">Link</Nav.Link>
                    </Nav>
                    <Nav>
                        {showLogin ? <Nav.Link href="/login">Login</Nav.Link>:
                        <NavDropdown title={name} id="basic-nav-dropdown">
                            <NavDropdown.Item href="logout">Logout</NavDropdown.Item>
                        </NavDropdown>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navigation;