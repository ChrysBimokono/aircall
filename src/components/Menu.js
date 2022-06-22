import React from 'react'

import { Link} from 'react-router-dom';
import '../css/footeritems.css';
const Menu =()=> {
  return (
      <Link to={'/menucontent'}>
       <div className='menu'>
           <div className='inner_circle'></div>
        </div>
        </Link>
  )
}

export default Menu