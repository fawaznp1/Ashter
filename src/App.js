import { Route, Routes, useLocation } from 'react-router-dom';
import React ,{useEffect} from 'react';
import './App.css';
import Home from './components/Home';
import BasicExample from './components/Header';
import ComponentName from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import DoctorDetails from './components/DoctorDetails';
import TopDoctors from './components/TopDoctors';
import AllDoctors from './components/AllDoctors';
import Login from './components/Login';
import UserDashboard from './components/UserDash';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {

  
  return (
    
    <div className="App">
      <ScrollToTop />
      <BasicExample />
     <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />} >  </Route>
      <Route path='/contact' element={<Contact />} >  </Route>
      <Route path='/topd' element={<TopDoctors />} ></Route>
      <Route path="/doctor/:id" element={<DoctorDetails />} /> 
      <Route path='/alldoctors' element={<AllDoctors />}></Route>
      <Route path="/dashboard" element={<UserDashboard />} />

     </Routes>
     <ComponentName />
    </div>
  );
}

export default App;
