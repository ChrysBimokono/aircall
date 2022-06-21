import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route ,Routes} from 'react-router-dom';

import GetData from './helpers/GetData.js';
import CallData from './components/CallData.js';
import Header from './Header.jsx';

const App = () => {
  return (
  <Router>
    <div className='container'>
      <Header/>
      <div className="container-view"> 
      <Routes>  
      <Route  path='/:callId' element={< CallData/>} />
      </Routes>
      </div>
    </div>
    </Router>
  );
};

ReactDOM.render(<App/>,document.getElementById('app'));

export default App;
