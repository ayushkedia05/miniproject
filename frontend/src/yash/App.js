import React from 'react';
import AppointmentForm from './AppointmentForm';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Mob from './Mob';
import TreatmentForm from './TreatmentForm';
import DiagnosticApp from './Diagnosticapp';
import AboutSection from './AboutSection';
import Dashboardnew from './Dashboardnew';
import HealthAnalysis from './HealthAnalysis';
import DailyPlan from './DailyPlan';
import Piechart from './Piechart';
import Bargraph from './Bargraph';
import Plans from './Plans';
import HealthQuotes from './HealthQuotes';
import Prizes from './Prizes';
import ChatBot from './ChatBot';
import MedicineCalculator from './MedicineCalculator';
import Calendar from './Calendar';
import TaskOfTheDay from './TaskoftheDay';
const App = () => {
  return (
    <>
   <Routes>
   <Route path="/chatbot" element={<><ChatBot/></>}/>
   <Route path="/piechart" element={<><Piechart/><Bargraph/></>}/>
   <Route path="dailyplan" element={<><DailyPlan/></>}/>
   <Route path="/healthanalysis" element={<><HealthAnalysis/></>}/>
   <Route path="/about" element={<><Navbar/><AboutSection/></>}/>
   <Route path="/diagnostic" element={<><DiagnosticApp/></>}/>
   <Route path="/treatmentform" element={<><Navbar/><TreatmentForm/></>}/>
   <Route path="/mob" element={<><Mob/></>}/>
    <Route path="/book" element={<><Navbar/><AppointmentForm/></>}/> 
    <Route path="/" element={<><Home/><Plans/><HealthQuotes/></>}/>
    <Route path="/dashboard" element={<><Dashboardnew/></>}/>
    <Route path="/medicinecalculator"  element={<><MedicineCalculator/></>}/>
    <Route path="/yogasan" element={<><Calendar/><TaskOfTheDay/></>}/>
   </Routes>
    </>
  );
};

export default App;
