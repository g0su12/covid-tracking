import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { About, Information, Home, Prevention } from './@components/main/components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" exact element={<About/>}/>
          <Route path="/information" element={<Information/>}/>
          <Route path="/prevention" element={<Prevention/>}/>
          {/* <Route
            path="/"
            element={
              <main style={{ padding: "200px", textAlign: "center", fontSize: "1.7rem", color: "white" }}>
                <p>There's nothing here! Click to another page for more information</p>
              </main>
            }
          /> */}
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode> 
);

reportWebVitals();
