import './App.css';
import ExerciseDetail from './components/exercises/pages/ExerciseDetail';
import Home from './components/exercises/pages/Home'
import {BrowserRouter as  Router ,Route ,Routes} from 'react-router-dom';
import webFont from 'webfontloader';
import React from 'react';
import Products from './components/Product/Products.js'
import AppointmentForm from './yash/AppointmentForm';
import Bmi from './components/BmiComponent';
import FinalDiet from './components/BmiComponent/FinalDiet';
import FinalDiet2 from './components/BmiComponent/Finaldiet2';
import FinalDiet3 from './components/BmiComponent/Finaldiet3';
// import Disease from './components/disease/diisease';
import { Box } from '@mui/material';
import HomeTime from './pages/Home'
import Mvp from './components/MVPComponent/Mvp';
import HeroSection from './components/Home/HeroSection';
import Navbar from './components/Home/Navbar.js'
import Disease from './components/disease/diisease';
import Skindisease from './components/skindisease/skindisease.js'
import MedicineCalculator from './yash/MedicineCalculator';
import TaskOfTheDay from './yash/TaskoftheDay';

function App() {

  React.useEffect(()=>{

    webFont.load({
      google:{
        families: ['PT Sans Narrow', 'sans-serif']
      }
    });

  },[])

  
  return (
    <Router>
   <Navbar />
      <Routes>
   

      <Route exact path="/" element={<HeroSection/>} />
  
       <Route exact path="/yoga" element={<Products />} />
      <Route exact path="/bmi" element={<Bmi/>} />
      <Route exact path="/predict" element={<Disease/>} />

      <Route exact path="/diet-list" element={<FinalDiet />} />
      <Route exact path="/overdiet-list" element={<FinalDiet3 />} />
      <Route exact path="/underdiet-list" element={<FinalDiet2 />} />


      <Route exact path="/nutrition" element={<Mvp />} />
      <Route exact path="/Skindisease" element={<Skindisease />} />
      <Route exact path="/MedicineCalculator" element={<MedicineCalculator />} />
      <Route exact path="/task" element={<TaskOfTheDay />} />


      <Route path="exercises/" element={<Home />} />
      <Route exact path="/booknow" element={<AppointmentForm />} />

      
      
      <Route path="/exercise/:id" element={<ExerciseDetail />} />

      <Route exact path="/diease-prediction" element={<Disease />} /> 


      </Routes>
  
    </Router>
  );
}

export default App;
