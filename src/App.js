import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import {About} from './Pages/About';
import Dummyabout from './Pages/Dummyabout';
import Contact from './Pages/Contact';
import {Signup} from './Pages/Signup';
import {Signin} from './Pages/Signup';
import Mainpage from './Pages/Accessories/Mainpage'
// import Account from './Pages/Accessories/Account'
// import Wishlist from './Pages/Accessories/Wishlist'
// import Messages from './Pages/Accessories/Messages'
// import Notifications from './Pages/Accessories/Notifications'
// import Callbacks from './Pages/Accessories/Callbacks'
import Help from './Pages/Help';
import Productpage from './Pages/Productpage';
 import Firstpage from './Pages/Firstpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/firstpage' element={<Firstpage />}/>
        <Route path="/" element={<Layout />}>
          <Route index element= {<Home />}/>
          
          <Route path='/dummyabout' element= {<Dummyabout />}/>
          <Route path='/contact' element= {<Contact />}/>
          
          {/* <Route path='/help' element= {<Help />}/> */}
<Route path='/productpage/:title' element={<Productpage />}/>
        </Route>
        <Route path='/mainpage' element= {<Mainpage />}/>
        <Route path='/signup' element= {<Signup />}/>
        <Route path='/signin' element= {<Signin />}/>
        <Route path='/about' element= {<About />}/>
        {/* <Route path='/mainpage/account' element= {<Account/>}/>
        <Route path='/mainpage/wishlist' element= {<Wishlist />}/>
        <Route path='/mainpage/messages' element= {<Messages />}/>
        <Route path='/mainpage/notifications' element= {<Notifications />}/>
        <Route path='/mainpage/callbacks' element= {<Callbacks />}/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
