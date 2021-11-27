import NavBar from "./NavBar";
import Header from "./Header";
import Posts from "./Posts";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } 
  from "react-router-dom";
import Post1 from "./Post1";
import Post3 from "./Post3";
import Post2 from "./Post2";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
    <NavBar/>
    <Header/>

 
  {/* <Router> */}
           
              <Routes>
              <Route exact path="/Posts" element={<Posts/>}/>
              
             <Route exact path="/Post1" element={<Post1/>}/>
             <Route path="/Post3" element={<Post3/> }/>
             <Route path="/Post2" element={<Post2/>}/>
             <Route path="/Register" element={<Register/>}/>
             <Route path="/Login" element={<Login/>}/>
             <Route path="/Logout" element={<Logout/>}/>
           
              
           {/* <Route path="/Contact" element={<Contact/>}/> */}
         
              </Routes>
             <Footer/>
            
    </div>
  );
}

export default App;