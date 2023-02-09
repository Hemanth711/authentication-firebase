import React, { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Todo from "./Todo/Todo"
function App() {
  const [userName,setUserName] = useState("")
  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserName(user.email.substr(0,user.email.indexOf("@")))
      }
      else{
        setUserName("")
      }
    })
  },[])
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path='/Todo' element={<Todo name={userName}/>}/>
          <Route path='/Login' element= {<Login/>}/>
          <Route path='/Signup' element= {<Signup/>}/>
          <Route path='/' element= {<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App