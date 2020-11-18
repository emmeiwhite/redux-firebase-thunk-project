import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Posts extends Component {
    state ={
        posts:[],
        error:false,
        loading:false
    }

    componentDidMount(){
        this.setState({
            loading:true
        },
            ()=>{
                fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts =>{
            this.setState({
                loading:false,
                posts:posts.slice(0,10)
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
        const {loading, error,posts} = this.state
        console.log(posts)
        return (
            <div>
                <h1>Posts Component</h1>
                {
                    loading && !error ? (
                        <p>Loading ...</p>
                    ): !loading  && error ? (
                        <p>Error: Couldn't load the data</p>
                    ):(
                        <main>
                            {
                                posts.map(post=>{
                                    return(
                                        <div className="card" key={post.id}>
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="card-text">{post.body}</p>
                                                <Link to={`/posts/${post.id}`} className="btn btn-primary">Check Post</Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </main>
                    )
                }
            </div>
        )
    }
}
