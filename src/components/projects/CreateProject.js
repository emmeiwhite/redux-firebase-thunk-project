import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input,TextArea} from 'reactstrap';

export default class CreateProject extends Component {
    state={
        title:'',
        content:''
      }
    
      handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
      }
    
      handleChange = (e)=>{
        const {name,value} = e.target;
        this.setState({
         [name]:value
        });
      }
    
      render() {
        return (
          <Form onSubmit={this.handleSubmit} className="create-project">
            <h2 className="lead">Create New Project</h2>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input 
                type="text" 
                name="title" 
                id="title" 
                onChange={this.handleChange} 
                required 
                placeholder="Title" 
                value={this.state.title}
              />
            </FormGroup>
            
            <FormGroup>
              <Label for="content">Content</Label>
              <Input 
                type="textarea" 
                name="content" 
                id="content" 
                onChange={this.state.content} 
                required 
                placeholder="Project Content" 
                value={this.state.content}
              />
            </FormGroup>

            <Button type="submit" className="create-project-btn">Add Project</Button>
          </Form>
        )
      }
}
