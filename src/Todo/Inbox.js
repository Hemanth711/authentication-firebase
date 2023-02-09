import React, { useState } from 'react'
import './Styles.css'
export default function App(props) {
  const [newTask,setNewTask] = useState(false)
 const titleRef = useState()
 const calendarRef = useState()
  const newTaskHandler =()=>{
    setNewTask(true)
  }
  const addHandler=(e)=>{
    e.preventDefault()
    if(titleRef.current.value === ""){
      window.alert("Task Can Not be empty");
      return;
    }
     const newObj = {
      number: props.list.length+1,
      title: titleRef.current.value,
      date: new Date(calendarRef.current.value)
     }
     props.append(newObj)
     setNewTask(false)
  }
  const removeHandler=()=>{
    setNewTask(false)
  }
    return (
    <div>
      <h3>TodoListApp</h3>
      {!newTask && (
        <button className="new" onClick={newTaskHandler}>+Add New</button>
      )}
      {newTask && (
   <form className="newtask-box">
     <input type="text" ref={titleRef}/>
     <div className="button"> 
        <button className="new" onClick={addHandler}>Add Task</button>
        <button className="new" onClick={removeHandler}>Remove</button>
        <input type="date" ref={calendarRef} defaultValue="2023-02-04"/>
     </div>
   </form>
      )}
      <div>
        {props.list.map((list)=>{
          return(
           <div className="box" key={list.number}>
                {list.title} {list.date.toLocaleDateString()}
            </div>
        )
        })}
      </div>
      </div>
  )
}
