import React, { Component } from "react";
import './NavBar.css'
import {Link} from 'react-router-dom'

  


class NavBar extends Component{
    render(){
        return(
   
           <div className="NavBar">
           <img className="blog_logO" src="./logo.png"/>
            <ul>
           
           <li>Home</li>
          <li><Link to={"/Register"} style={{textDecoration:'none', color:'black'}}>Register</Link></li>
           <li><Link to={"/Logout"} style={{textDecoration:'none', color:'black'}}>LogOut</Link></li>
           <li><Link to={"/Posts"} style={{textDecoration:'none', color:'black'}}>Posts</Link></li>
            </ul>
            <i className="fas fa-search"></i>
            </div>
         


        


        )
        
    }
}

export default NavBar