import React from 'react'
import './Styles.css'
function SideNav(props) {
  return (
    <ui className='side-nav'>
  <li onClick={()=>{props.change("INBOX")}}>
    <div>INBOX</div>
  </li>
  <li onClick={()=>{props.change("TODAY")}}>
    <div>TODAY</div>
  </li>
  <li onClick={()=>{props.change("NEXT")}}>
    <div>Next7Days</div>
  </li>
    </ui>
  )
}

export default SideNav

