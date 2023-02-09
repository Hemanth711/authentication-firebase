import React, { useState } from 'react'
import styles from './Login.module.css'

import Inputform from '../InputForm/Inputform'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function Login() {
    const [values,setValues] = useState({
        name:"",
        pass:""
    })
    const navigate = useNavigate()
    const [errorMsg,setErrorMsg] = useState("")
    const [submitBtnDisabled] = useState(false)
    const handelSubmission =()=>{
        if(!values.email || !values.pass){ 
            setErrorMsg("Fill All Feilds")
            return
        }
        signInWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
           navigate("/Todo")
        }).catch((err)=>{
            setErrorMsg(err.message)
        })
    }
  return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
     <h1 className={styles.heading}>Login</h1>
      <Inputform label="Email" type='email' placeholder="Enter Your Email" onChange={(event)=>{setValues((prev)=>({...prev,email:event.target.value}))}}/>
      <Inputform label="Passowrd" type='passowrd' placeholder="Enter Your Passowrd" onChange={(event)=>{setValues((prev)=>({...prev,pass:event.target.value}))}}/>
      <div className={styles.footer}>
         <b className={styles.error}> {errorMsg}</b>
         <button  onClick={handelSubmission} disabled={submitBtnDisabled}>Login</button>
         <p>Don't have an account? </p>
         <span>
            <Link to="/Signup">Signup</Link>
         </span>
      </div>
    </div>

 </div>
  )
}
