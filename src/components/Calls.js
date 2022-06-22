import React from 'react'

import {IoMdCall} from 'react-icons/io';
import { Link} from 'react-router-dom';
const Calls =()=> {
  return (
      <Link to={'/calls'}>
    <div className='incoming_calls'>
        <IoMdCall className='icon'/>
    </div>
    </Link>
  )
}

export default Calls