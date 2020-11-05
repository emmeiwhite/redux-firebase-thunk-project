import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Signin.css'


export default class Signin extends Component {
  state={
    userEmail:'',
    userPassword:''
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
  }

  handleChange = (e)=>{
    const {name,value} = e.target;
    this.setState({
      [name]:value
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="sign-in-form">
        <h2 className="lead">Sign In</h2>
        <FormGroup>
          <Label for="userEmail">Email</Label>
          <Input type="email" name="useremail" id="userEmail" onChange={this.handleChange} required placeholder="Email" value={this.state.userEmail}/>
        </FormGroup>
        <FormGroup>
          <Label for="userPassword">Password</Label>
          <Input type="password" name="password" id="userPassword" onChange={this.handleChange} required placeholder="Password" value={this.state.userPassword} />
        </FormGroup>
        <Button type="submit" className="sign-in-btn">Signin</Button>
      </Form>
    )
  }
}



   
