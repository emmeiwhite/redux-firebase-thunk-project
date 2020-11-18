import React, { Component } from 'react'

export default class Post extends Component {
    state = {
        postId:null,
        error:false,
        loading:false,
        post:{}
    }

    componentDidMount(){
        this.setState({
            loading:true,
            postId:this.props.match.params.post_id
        },
            ()=>{
                fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.postId)
                .then(response => {
                    if(response.status !==200){
                        throw new Error("Could not fetch Data");
                    }
                   return response.json()
                })
                .then(post =>{
                    console.log(post);
                    this.setState({
                        loading:false,
                        post
                    })
                })
                .catch(error=>{
                    console.log("Error: Couldn't fetch data",error);
                    this.setState({
                        loading:false,
                        error:true
                    })
                })
                    }
                 );
                }
        
    
    render() {
        const {loading, error,post} = this.state;
        return (
            <div>
                {
                    loading && !error ? (
                        <p>Loading ...</p>
                    ): !loading  && error ? (
                        <p>Error: Couldn't load the data</p>
                    ) :(
                        <main>
                         <h3>Particular Post Information</h3>
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                        </div>
                        </div>
                                   
                            
                        </main>
                    )
                }
            </div>
        )
    }
}
