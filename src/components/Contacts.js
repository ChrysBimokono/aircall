import React from 'react'
import {IoIosContact} from 'react-icons/io';
import{ Link } from 'react-router-dom';
import '../css/footeritems.css';
const Contacts=() => {
  return (
      <Link to={'/contacts'}>
    <div className='contacts'>
      <IoIosContact className='icon'/>
    </div>
    </Link>
  )
}

export default Contacts