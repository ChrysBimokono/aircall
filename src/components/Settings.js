import React from 'react';

import {IoMdSettings} from 'react-icons/io';
import '../css/footeritems.css';
import {Link} from 'react-router-dom';
function Settings() {
  return (
  <Link to={'/settingcontent'}>
    <div className='settings'> 
        <IoMdSettings className='icon'/>
    </div>
  </Link>
    
  )
}

export default Settings