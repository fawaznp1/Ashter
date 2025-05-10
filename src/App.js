import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import BasicExample from './components/Header';
import ComponentName from './components/Footer';
import DoctorDirectory from './components/Doctors';
import About from './components/About';
import Contact from './components/Contact';
import DoctorDetailsPage from './components/DocDetail';

function App() {
  return (
    
    <div className="App">
      <BasicExample />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/doctors' element={<DoctorDirectory />}></Route>
      <Route path='/about' element={<About />} >  </Route>
      <Route path='/contact' element={<Contact />} >  </Route>
      <Route path='/doctordetails' element={<DoctorDetailsPage />} >  </Route>

     </Routes>
     <ComponentName />
    </div>
  );
}

export default App;
