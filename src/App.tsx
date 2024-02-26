import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Home from './Pages/Home';
import Header from './Component/Header';
import AddPlanner from './Pages/AddPlanner';
import Sidebar from './Pages/Sidebar';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';

function App() {
  return (
    <Router>
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '10px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AddPlanner />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;


{/* <header className="App-header">
<div className="col-25">
<Sidebar className="col-25">
  <Menu>
    <MenuItem >Test</MenuItem>
  </Menu>
</Sidebar>
</div> */}
{/* <Sidebar >
<Menu >
<SubMenu style={{alignItems:"flex-start"}} label="Charts">
<MenuItem> Pie charts </MenuItem>
<MenuItem> Line charts </MenuItem>
</SubMenu>
<MenuItem> Documentation </MenuItem>
<MenuItem> Calendar </MenuItem>
</Menu>
</Sidebar> */}

{/* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.tsx</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */}
// </header>
