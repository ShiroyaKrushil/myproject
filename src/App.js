import { useState } from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Home/login/Login';
import Signup from './pages/Home/signUp/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './pages/Company/Company';
import Vehicle from './pages/Vehicle/Vehicle';
import Driver from './pages/Driver/Driver';
import Customer from './pages/Customer/Customer';
import Private from './pages/private';
import Dashboard from './pages/Home/Dashboard';
import NavLeft from './components/nav/NavLeft';
import NavTop from './components/nav/NavTop';
import Advancepayment from './pages/AdvancePayment/Advancepayment';
import Devicetoken from './pages/DeviceToken/Devicetoken';
import Driverattendance from './pages/DriverAttendance/Driverattendance';
import Drivergeolocation from './pages/DriverGeoLocation/Drivergeolocation';
import Expense from './pages/Expense/Expense';
import Expensecategory from './pages/ExpenseCategory/Expensecategory';
import Lead from './pages/Lead/Lead';
import Leadcategory from './pages/LeadCategory/Leadcategory';
import Site from './pages/Site/Site';
import Task from './pages/Task/Task';
import Taskcategory from './pages/TaskCategory/Taskcategory';
import Addcompany from './pages/Company/Add';

function App() {
  const [col, setCol] = useState(false)
  const change = () => {
    setCol((ch) => !ch)
  }

  const auth = localStorage.getItem('user');

  return (
    <div>
      <BrowserRouter>{auth ?
        <div className={`main ${col ? 'msb-x' : ''}`}>
          <nav className="mnb navbar navbar-default navbar-fixed-top">
            <div className="container-fluid" style={{ display: 'flex', justifyContent: 'left', cursor: 'pointer' }}>
              <div style={{ padding: "15px 0", display: 'flex', width: '100%', alignItems: 'center' }}>
                <a id="msbo" onClick={change}><i className="ic fa fa-bars"></i></a>
                <NavTop />
                <div id="navbar" className="navbar-collapse collapse" ></div>
              </div>

            </div>
          </nav>

          <div className="msb" id="msb">
            <nav className="navbar navbar-default" role="navigation">
              <NavLeft />
            </nav>
          </div>

          <div className="mcw">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/company' element={<Company />} />
              <Route path='/addcompany' element={<Addcompany />} />

              <Route path="/vehicle" element={<Vehicle />} />
              <Route path="/driver" element={<Driver />} />
              <Route path="/customer" element={<Customer />} />
              <Route path="/advancepayment" element={<Advancepayment />} />
              <Route path="/devicetoken" element={<Devicetoken />} />
              <Route path="/driverattendance" element={<Driverattendance />} />
              <Route path="/drivergeolocation" element={<Drivergeolocation />} />
              <Route path="/advancepayment" element={<Advancepayment />} />
              <Route path="/taskcategory" element={<Taskcategory />} />
              <Route path="/task" element={<Task />} />
              <Route path="/expensecategory" element={<Expensecategory />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/site" element={<Site />} />
              <Route path="/leadcategory" element={<Leadcategory />} />
              <Route path="/lead" element={<Lead />} />
              <Route path="/devicetoken" element={<Devicetoken />} />
            </Routes>

          </div>
        </div> : <Login />}

      </BrowserRouter>


      {/* <BrowserRouter>
      <Sidebar/>
        <Routes>
        <Route element={<Private />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/company" element={<Company />} />
          <Route path="/vehicle" element={<Vehicle />} />
          <Route path="/driver" element={<Driver />} />
          <Route path="/customer" element={<Customer />} />

        {/* company */}
      {/* <Route path="/add" element={<Add />} /> */}



      {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
