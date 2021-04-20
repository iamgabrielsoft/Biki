
import React, { Component } from 'react';
import { Container, Row, Col, Card, Nav, Button, ModalFooter } from 'react-bootstrap'
import {FaTwitter, FaGoogle } from 'react-icons/fa';
import apis from '../api/apihelper'; 


export default class SignupPage extends Component {
    constructor(props){
        super(props); 
        
        this.state = {
            username: "", 
            email: "", 
            password: ""
        }

        this.handleUsernameInput = this.handleUsernameInput.bind(this); 
        this.handleEmailInput = this.handleEmailInput.bind(this); 
        this.handlePasswordInput = this.handlePasswordInput.bind(this); 

        this.googleSignup = this.googleSignup.bind(this); 
        this.twitterSignup = this.twitterSignup.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this); 


    }

    handleUsernameInput(e) {
        const _name = e.target.name; 
        const _value = e.target.value; 

       this.setState({ [_name]: _value}); 
    }
    
    handleEmailInput(e){
        const _email = e.target.name; 
        const _value = e.target.value;

        this.setState({ [_email]: _value})
    }

    handlePasswordInput(e) {
        const _pwd = e.target.name; 
        const _value = e.target.value; 

        this.setState({[ _pwd]: _value})
       
    }

    handleSubmit(event) {
       event.preventDefault(); 

       const userData = {
           username: this.state.username, 
           email: this.state.email, 
           password: this.state.password
       }
 
       apis.signup(userData).then(response => {
           console.log('Result', response.data.data); 

       }).catch(err => {
           console.log('Error Occured', err)
       }) 
       
    }
    
    googleSignup() {
        
    }

    twitterSignup() {

    }

    renderSubmitButton() {
        return (
            <div className="text-center mb-3">
                <Button gradient="blue" className="btn-block z-depth-1a" onClick={this.handleSubmit} >Sign Up</Button>
            </div>
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
                                <strong>Sign Up</strong>
                            </h3>
                        </div>

                        
                        <input name ="username" label="username" placeholder="Username" value={this.state.username} onChange={this.handleUsernameInput}/>
                        <input name="email" label="email" type="email"  placeholder="Email" value={this.state.email} onChange={this.handleEmailInput} />
                        <input name="password" label="Password"  type="password"  className="mb-0" placeholder="Password" onChange={this.handlePasswordInput}/>
                        <p className="font-small blue-text d-flex justify-content-end pb-3"><Nav.Link href="/forgotpassword" className="blue-text ml-1">Forgot password</Nav.Link></p>
                        
                        { this.renderSubmitButton() }

                        <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
                        
                        { this.renderThirdSignupBtn() }

                    </Card>

                    <ModalFooter className="mx-5 pt-3 mb-1">
                        <p className="font-small grey-text d-flex justify-content-end">Already a Memeber?
                            <Nav.Link href="/signin" className="blue-text ml-1">Sign in</Nav.Link>
                        </p>
                    </ModalFooter>
                </Col>
            </Row>
        </Container>
        )
    }
}

