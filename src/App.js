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
import FloatingChatbot from './components/ChatAi';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Careers from './components/Careers';
import HospitalFacilities from './components/Facility';
import HospitalBlog from './components/Blog';

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
      <FloatingChatbot />
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
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/career" element={<Careers />} />
      <Route path="/facilities" element={<HospitalFacilities />} />
      <Route path="/blog" element={<HospitalBlog />} />

     </Routes>
     <ComponentName />
    </div>
  );
}

export default App;
