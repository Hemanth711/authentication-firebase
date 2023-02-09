import React from 'react'
import './Styles.css'
export default function ListRender(props) {
  return (
    <>
        {props.list.map((list)=>{
            return(
                <div className='box' key={list.number}>
                    <div className='task'>
                    {list.title} {list.date.toLocaleDateString()}
                    </div>
                </div>
            )
        })}
    </>
  )
}
