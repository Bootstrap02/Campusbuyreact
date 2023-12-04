import React from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
// import Firstpage from './Pages/Firstpage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Firstpage/>}/> */}
        <Route path="/" element={<Layout />}>
          <Route index element= {<Home />}/>
          <Route path='about' element= {<About />}/>
          <Route path='contact' element= {<Contact />}/>
        </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
