
import React, {Component } from 'react'; 
import { Nav, Button, Container, Navbar } from 'react-bootstrap';

export default class NavBar extends Component{
    render() {
        return (
            <>
                <Navbar className="nav" collapseOnSelect fixed="top" expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Toggle aria-controls="responsive-navabr-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="nav-links">
                                    <Nav.Link href="/">Biki</Nav.Link>
                                    <Nav.Link href="/feature">Features</Nav.Link>
                                    <Nav.Link href="/pricing">Pricing</Nav.Link>
                                    <Button href="/signup">Sign Up</Button>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                </Navbar>
            </>
        )
    }
}


