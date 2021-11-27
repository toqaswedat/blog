import React, { Component } from "react";
import './Register.css'
import {Link} from "react-router-dom"
import Login from "./Login";


class Register extends Component{
    constructor(){
        super();

        this.state={
            UserName:'',
            Email:'',
            password:'',
            RepeatPassword:'',
            Register:false,
        }
    }

    handleChange =(e,attr)=>{
        this.setState({
            [attr]:e.target.value,
        })   
    }  


handleSubmit =(e)=>{
    e.preventDefault();
    if(this.state.Email.includes("@") && this.state.password.length >=6 && this.state.password===this.state.RepeatPassword){
        let user={
            name:e.target.UserName.value,
            Email: e.target.Email.value,
            Password:e.target.password.value,
            RepeatPassword:e.target.RepeatPassword.value,
            Register:true,
        }
        this.setState({
            Register:true,
        })
        localStorage.setItem((this.state.Email),JSON.stringify(user));  
    }
        e.target.reset();

    
}


    render(){

        return(
            <div className="formRegister">
        
    <form onSubmit={this.handleSubmit}>
        <h1>Create Account </h1>
        <label>UserName</label>
        <input type="name" placeholder="UserName" name="UserName"  onChange={(e)=>{this.handleChange(e,"UserName")}}/><br/>

        <label>Email</label>
        <input type="email" placeholder="email@gmail.com" name="Email" onChange={(e)=>{this.handleChange(e,"Email")}}/><br/>
        {this.state.Email.includes("@")?"":<p style={{color:'red'}}>Email must be includes @</p> }
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" onChange={(e)=>{this.handleChange(e,"password")}}/><br/>
        {this.state.password.length<6 ?<p style={{color:'red'}}>Password must be 6 characters at least</p>:""}

        <label>Repeat Password</label>
        <input type="password" placeholder="RepeatPassword" name="RepeatPassword" onChange={(e)=>{this.handleChange(e,"RepeatPassword")}}/><br/>
    {this.state.password!==this.state.RepeatPassword ?<p style={{color:'red'}}>Repeat password not match with password</p>:""}
    <button type="submit" >Create Account</button>
    <p className="login">Already have an account ? <span><Link to={"/Login"} style={{textDecoration:"none",color:"red"}}>Login</Link></span></p>
    </form>
    {this.state.Register?<Login/>: ""}
            </div>
        )
    }
}

export default Register;