import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Home/login/Login';
import Signup from './pages/Home/signUp/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar'
import Navbar from './Navbar';
import Company from './pages/Company/Company';
import Vehicle from './pages/Vehicle/Vehicle';
import Driver from './pages/Driver/Driver';
import Customer from './pages/Customer/Customer';
import Add from './pages/Company/Add';
function App() {
  return (
    <div>
   
      <BrowserRouter>
      <Navbar />
      <Sidebar/>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company" element={<Company />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/customer" element={<Customer />} />

        {/* company */}
        <Route path="/add" element={<Add />} />

        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
