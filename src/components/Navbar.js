import React from 'react'
import { VscSettings } from 'react-icons/vsc';
function Navbar() {
  return (
    <div className='nav_container'>
      <div className='dashed_line text_align'>Inbox</div>
      <div className='dashed_line text_align'>All calls</div>
      <div>
          <VscSettings/>
      </div>
    </div>
  )
}

export default Navbar