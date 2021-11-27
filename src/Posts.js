import React, { Component } from "react";
import './Posts.css'
import Post from "./Post";
import { Link } from "react-router-dom";
import { LoremIpsum, Avatar } from 'react-lorem-ipsum';


class Posts extends Component{
     constructor(){
         super();
         
         this.state={
             arrAdd:[
                {
                    src:'post1.PNG',
                    name:' Lorem6',
                    recipe:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        
                },
                {
                    src:'post5.PNG',
                    name:'Lorem5',
                    recipe:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        
                }
            ]
            ,
           Post:[],
             numberClickAdd:0
         }
        
       
           
       
     }

   

     addPost=()=>{
        
      

       
  
        if(this.state.numberClickAdd< this.state.arrAdd.length){
           
            this.state.Post.push(this.state.arrAdd[this.state.numberClickAdd])
            console.log(this.state.Post)
    
           
            this.setState({
                numberClickAdd:this.state.numberClickAdd+1
    
            });

       this.ElementAdd=this.state.Post.map((element)=>{
          return <Post  src={element.src}
                  name={element.name}
                  recipe={element.recipe}/>
       })
    
        }

     }

    render(){
        return(
            <>
          
            <div className="RecipesPosts">
            <h1>Informations</h1>
            </div>
            <div className="Posts">
        
 <Link to={"/Post1"}  style={{textDecoration:'none', color:'black'}}>      
 <Post src="post1.PNG" name="Lorem1" recipe="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."  /></Link>


<Link to={"/Post3"}  style={{textDecoration:'none', color:'black'}}>
   <Post src="post2.PNG" name="lorem2 " recipe="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/></Link>

<Link to={"/Post2"}  style={{textDecoration:'none', color:'black'}}>
 <Post  src="post3.PNG" name="lorem3" recipe="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/></Link>



           {this.ElementAdd}

            </div>
            <button className="Add" onClick={this.addPost}>Add Post</button>
            </>
        )
    }
}

export default Posts;