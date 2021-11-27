import React, { Component } from "react";
import './Post.css'


class Post extends Component {
    render(){
        return (
            <>
            
            <div className="Post">
                <h1>{this.props.name}</h1>
                <img src={this.props.src} alt={this.props.name} width="400vw" height="400vh"/>
                <h3 >{this.props.recipe}</h3>
            
            </div>
            </>
        )
    }
}

export default Post;
