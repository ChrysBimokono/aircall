import React from 'react'

import {FaRegDotCircle} from 'react-icons/fa';
import '../css/footeritems.css';
import {Link} from 'react-router-dom';

const FooterCircle =() => {
  return (
    <Link to={'/allcalls'}>
    <div className='footer_circle'>
        <FaRegDotCircle  className='icon'/>
    </div>
    </Link>
    
  )
}

export default FooterCircle