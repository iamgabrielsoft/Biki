

//signin UI-Page 

import React, { Component } from 'react'; 
import { Button, Container, Card, ModalFooter, Row, Nav, Col} from 'react-bootstrap'; 
import { FaGoogle, FaTwitter, } from 'react-icons/fa'




export default class Signin extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: "", 
            password: ""
        }


        this.handleUsername = this.handleUsername.bind(this);  
        this.handlePassword = this.handlePassword.bind(this)
        this.handleSubmited = this.handleSubmited.bind(this) 

    }


    handleUsername(event) {
        console.log(event.target.value)
    }

    handlePassword(event) {
        console.log(event.target.value)
    }


    handleSubmited(event) {

    }

    LoginButton() {
        return (
            <Button color="white"  className="mr-md-3 z-depth-1a">Login </Button>
        )
    }

    renderThirdSignupBtn() {
        return (
            <div className="row my-3 d-flex justify-content-center">
                <Button color="white"  className="mr-md-3 z-depth-1a"> <FaTwitter/></Button>
                <Button color="white"  className="mr-md-3 z-depth-1a"> <FaGoogle/></Button>
            </div>
        )
    }

    render() {
        return (
            <Container>
            <Row>
                <Col md="6">
                    <Card className="mx-4">
                        <div className="text-center">
                            <h3 className="dark-grey-text mb-5">
                                <strong>Sign In</strong>
                            </h3>
                        </div>

                        
                        <input name ="username" label="username" placeholder="Username"  onChange={this.handleUsername}/>
                        <input name="password" label="Password"  type="password"  className="mb-0" placeholder="Password" onChange={this.handlePassword}/>
                        <p className="font-small blue-text d-flex justify-content-end pb-3"><Nav.Link href="/forgotpassword" className="blue-text ml-1">Forgot password</Nav.Link></p>
                        
                        { this.LoginButton()}

                        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
                        
                        { this.renderThirdSignupBtn() }

                    </Card>

                    <ModalFooter className="mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">SignUp
                            <Nav.Link href="/signup" className="blue-text ml-1">Sign in</Nav.Link>
                        </p>
                    </ModalFooter>
                </Col>
            </Row>
        </Container>
        )
    }
}