//import logo from './logo.svg';
 // import React from "react";
import React ,{useEffect, useState} from 'react'
//  import User from './User';
//import Home from './Home';
function App() {

  const [post, setPost] = useState([])

  
     useEffect(()=>{
      fetch("https://randomuser.me/api/?results=15")


      .then((response) => response.json())
      .then((data) => setPost(data.results) );
    } ,[]);

      function abc(){
      
        fetch("https://randomuser.me/api/?results=15")


    .then((response) => response.json())
    .then((data) => setPost(data.results) );
      }
    
  // } ,[]);
  // alert('hello')

  // fetch("https://randomuser.me/api/")

  // .then((response) => response.json())
  // .then((data) => setPost(data.results) );
  
  
      
    //  abc()

      function abcd(){
        setPost([])
        alert('not')
      }
    function abcde(){
      <a href=''/>
    }

  return (
    <>
   <div>
     <button onClick={abc}>+</button>
    <button onClick={abcd}>-</button>
    <button onClick={abcde}>%</button>
    
    <h1>hello</h1>
    {post.map((x)=>
    <>
       <p>{x.gender}</p>
       <p>{x.name.first}</p>
       </>
    )}
     <img src={post} alt="hhhh" />

    
   {/* {post.gender} */}
   {/* {post.dob.date} */}
   {/* <h1>hello</h1> */}
</div>
{/* <h5><a href={'User'}>user</a></h5> */}
<a href={'User'}>user</a>
{/* <Home /> */}
</>
  );
}

export default App;