import React, { useState } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'
import './Styles.css'
 const list =[
    {number:1,title:"Lets Complete this",date:new Date("02/25/2023")},
    {number:2,title:"should sleep at 9",date:new Date("02/28/2023")},
    {number:3,title:"should complete react",date:new Date("02/03/2023")}
 ]

function MainSection(props) {
   const[filteredList,setFilteredlist] = useState(list)
    const addToList =(obj)=>{
        list.push(obj)
        setFilteredlist(list)
    }
  return (
    <div className='main-section'>
       {props.active === "INBOX" && (
        <Inbox list={filteredList} append={addToList}/>
       )}
       {props.active === "TODAY" && <Today list={filteredList}/>}
       {props.active === "NEXT" &&  <Next7Days list={filteredList}/>}
     
    </div>
  )
}
export default MainSection
                  