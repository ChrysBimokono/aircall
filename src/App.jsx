import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route ,Routes} from 'react-router-dom';

import GetData from './helpers/GetData.js';
import CallData from './components/CallData.js';
import CallLists from './components/CallLists.js';
import Calls from './components/Calls.js';
import CallsContent from './components/CallsContent.js';
import Contacts from './components/Contacts.js';
import ContactContent from './components/ContactContent.js';
import Menu from './components/Menu.js';
import MenuContent from './components/MenuContent.js';
import Settings from './components/Settings.js';
import SettingContent from './components/SettingContent.js';
import IncomingCalls from './components/IncomingCalls.js';
import ArchivedCalls from './components/archivedCalls.js';
import FooterCircle from './components/footerCircle.js';
import Header from './Header.jsx';
import Footer from './components/Footer.js';

const App = () => {
  return (
  
    <div className='container'>
      <Header/>
      <div className="container-view"> 
      <Routes>
         <Route path='/' element={<CallLists />}/>
      </Routes>
       
      <Routes>
         <Route path='/calls' element={<CallsContent/>}/>
      </Routes>
      <Routes>
         <Route path='/contacts' element={<ContactContent/>}/>
      </Routes>
      <Routes>
         <Route path='/menucontent' element={<CallLists/>}/>
      </Routes>
      <Routes>
         <Route path='/allcalls' element={<CallLists/>}/>
      </Routes>

      <Routes>
         <Route path='/settingcontent' element={<SettingContent/>}/>
      </Routes>
      <Routes>
         <Route path='/callDetails/:callId' element={<CallData/>}/>
      </Routes>
      <Routes>
         <Route path='/incomingcalls' element={<IncomingCalls/>}/>
      </Routes>
      <Routes>
         <Route path='/archived' element={<ArchivedCalls/>}/>
      </Routes>
      </div>
      <div className='footer'>
      <Calls className="hover"/>
       <Contacts className="hover"/>
       <Menu/>
       <Settings />
       <FooterCircle />
       </div>
    </div>
   
  );
};

ReactDOM.render(<Router> <App/></Router>,document.getElementById('app'));

export default App;
