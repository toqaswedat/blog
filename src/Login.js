import React, { Component } from "react";
import './Login.css'
import Posts from "./Posts";
import { Link } from "react-router-dom";

class Login extends Component{

    constructor(){
        super();
        this.state={
            Email:'',
            Password:'',
            Login:false,
            
        }
    }

    handleChange =(e,attr)=>{
        this.setState({
            [attr]:e.target.value,
        })
    
    }

    handleSubmit=(e)=>{
        e.preventDefault();

    for (let i = 0; i < localStorage.length; i++) {
        let  userEmail = JSON.parse(localStorage.getItem(localStorage.key(i)));
    //    console.log(userEmail);

    if(userEmail.Email===this.state.Email && userEmail.Password===this.state.Password){
        //   logout required
      sessionStorage.setItem(userEmail.Email,localStorage.getItem(localStorage.key(i)));
      
          let user={
              Login:true,
          }
     this.setState({
         Login:true,
     })

      }
    // console.log("is logined")
      
    }
    
}

    


    render(){
        return(
            <div className="formLogin">
            <form onSubmit={this.handleSubmit}>
                <h1>Login</h1>
                <label>Email</label>
                <input type="email" placeholder="email@gmail.com" name="Email" onChange={(e)=>{this.handleChange(e,"Email")}}/>

                <label>password</label>
                <input type="Password" placeholder="Password" name="Password" onChange={(e)=>{this.handleChange(e,"Password")}}/><br/> 
                <button type="submit" >Login</button>
                <p className="login">Don`t  have an account ? <span><Link to={"/Register"} style={{textDecoration:"none",color:"red"}}>Create Account</Link></span></p>
            </form>
            {this.state.Login?alert("welcome"):""}
          
            </div>
         
        )
    }
}

export default Login;