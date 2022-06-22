import React from 'react'

import {IoMdCall} from 'react-icons/io';
import {IoIosContact} from 'react-icons/io';
import {IoSettings} from 'react-icons/io';

import { Link } from 'react-router-dom';
const Footer =() =>{
  return (
    <div className='footer'>
        <Link to ='/'>
            <div className='incoming_calls'>
                <IoMdCall/>
            </div>
        </Link>

        <Link to='/contacts'>
        <div className='contacts'>
          <IoIosContact/>
        </div>
        </Link>
         
         <Link to='/menu'>
         <div className='menu'>
           
           </div>
         </Link>

      <Link to='/settings'>
         <div className='settings'>
          <IoSettings/>
          </div>
        </Link>
        
    </div>
  )
}

export default Footer