import React from 'react'

import {Link} from 'react-router-dom';

import { NavLink } from 'react-router-dom';

import { VscSettings } from 'react-icons/vsc';
function Navbar() {

  let activeStyle= {
    
      color: '#2b2929',
      fontweight: 600
    
  }
  return (
    <div className='nav_container'>
      <NavLink 
      to="incomingcalls"
      style={({isActive})=>
      isActive ? activeStyle:undefined
      }>
         <div className='hover dashed_line text_align'>Inbox</div>
      </NavLink>

      <NavLink to="allcalls" 
      style={({isActive})=>
      isActive ? activeStyle:undefined
      }>
         <div className='hover dashed_line text_align'>All calls</div>
      </NavLink>
     
      <NavLink to="archived" 
      style={({isActive})=>
      isActive ? activeStyle:undefined
      }>
        <div className='hover'><VscSettings/> </div>
      </NavLink>
      
    </div>
  )
}

export default Navbar