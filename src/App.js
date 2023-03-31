import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './@components';
import "./App.scss";

function App() {
  return (
    <div>
      <div className="App">
        <Navbar/>
        <div className='main'>
          <Outlet/> 
        </div>
      </div>
    </div>
  );
}

export default App;
