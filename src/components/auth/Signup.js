import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Signup.css'

export default class Signup extends Component {
  state={
    userName:'',
    userEmail:'',
    userPassword:''
  }

  handleChange = (e)=>{
    const {name,value} = e.target;
    this.setState({
      [name]:value
    });
  }

  handleSubmit = (e)=>{
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="sign-up-form">
        <h2 className="lead">Sign Up</h2>
        <FormGroup>
          <Label for="userName">Name</Label>
          <Input
            type="text" 
            name="userName" 
            value={this.state.userName}
            id="userName" 
            required 
            onChange={this.handleChange} 
            placeholder="Name"
          />
        </FormGroup>

        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input 
            type="email" 
            name="userEmail" 
            value={this.state.userEmail}
            id="userEmail" 
            required 
            onChange={this.handleChange} 
            placeholder="Email"
          />
        </FormGroup>

        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input 
            type="password" 
            name="userPassword" 
            value={this.state.userPassword}
            id="userPassword" 
            required 
            onChange={this.handleChange} 
            placeholder="Password" 
          />
        </FormGroup>

        <Button type="submit" className="sign-up-btn">Signup</Button>
      </Form>
    )
  }
}
