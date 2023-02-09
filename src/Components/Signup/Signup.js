import React, { useState } from 'react'
import Inputform from '../InputForm/Inputform'
import styles from "./Signup.module.css"
import { Link, useNavigate } from 'react-router-dom'
import {auth} from "../../firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function Signup() {
    const [values,setValues]  = useState({
        name:"",
        email:"",
        pass:""
    })
    const [submitBtnDisabled,setSubmitBtnDisabled] = useState(false)
    const navigate = useNavigate()
    const[errorMsg,setErrorMsg] = useState("")
    const handelSubmission=()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("Fill All Fields")
            return;
        }
        setErrorMsg("")
        setSubmitBtnDisabled(true)
        createUserWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
            const user = res.user;
            console.log(user)
            updateProfile(user,{
                displayName:values.name
            })
            navigate("/Login")
        }).catch((err)=>{
            setSubmitBtnDisabled(false)
           setErrorMsg(err.message)
        })
    }
  return (
    <div className={styles.container}>
       <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>
         <Inputform label="Name" type='text' placeholder="Enter Your Name" onChange={(event)=>{setValues((prev)=>({...prev,name:event.target.value}))}}/>
         <Inputform label="Email" type='email' placeholder="Enter Your Email" onChange={(event)=>{setValues((prev)=>({...prev,email:event.target.value}))}}/>
         <Inputform label="Passowrd :" type="passowrd" placeholder="Enter Your Passowrd" onChange={(event)=>{setValues((prev)=>({...prev,pass:event.target.value}))}}/>
         <div className={styles.footer}>
            <b className={styles.error}> {errorMsg}</b>
            <button onClick={handelSubmission} disabled={submitBtnDisabled}>Signup</button>
            <p>Already have an account? </p>
            <span>
                <Link to="./Login">Login</Link>
            </span>
         </div>
       </div>

    </div>
  )
}
