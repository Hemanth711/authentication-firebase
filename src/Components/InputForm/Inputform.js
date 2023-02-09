import React from 'react'
import styles from "./inputForm.module.css"
export default function Inputform(props) {
  return (
    <div className={styles.container}>
       {props.label && <label>{props.label}</label>}
       <input {...props}/>
    </div>
  )
}
