import React, { Component } from "react";
import { Link } from "react-router-dom";
import './ALLPost.css';

class Post3 extends Component{
    constructor(){
        super();

        this.state={
             number:0,
             comment:'',
             Addcomment:false,
             ArrComment:[]
        }
    }
    addLike=()=>{
        this.setState({
            number:this.state.number+1,
        })
        console.log(this.state.number)
    }

   
    handelComment=(e)=>{
        this.setState({
            comment:e.target.value,
        })

       
       
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        // let newArr=this.state.ArrComment;
        // newArr.push(this.state.comment);

       this.state.ArrComment.push(this.state.comment);

       this.setState({
        Addcomment:true,
       })
    
    //    console.log(newArr)


       e.target.reset();
       
    }

    render(){
        return(       
             <div className="SinglePostDiv">
             <img src="post3.PNG" alt="" width="400vw" height="400vh"/>
             <div>
 <h1>Lorem1</h1>
<h3 >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</h3>
<div class="AddLike">
<span>{this.state.number}</span><i className="far fa-thumbs-up" onClick={this.addLike}></i>
</div>
<div className="AddComments">
<h3>Comments :</h3>
<form onSubmit={this.handleSubmit}>
 <input type="text" name="text" onChange={(e)=>{this.handelComment(e)}} />
 <button type="submit" >Add Comments</button><br/>
 </form>
 </div>
 <div>{this.state.Addcomment?<h1>{this.state.ArrComment}</h1>:""}</div>



</div>
</div>
        
 


        )
    }
}

export default Post3 ;