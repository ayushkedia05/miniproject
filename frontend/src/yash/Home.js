import React from 'react'
import Navbar from './Navbar'
import hos1 from './components/hos1.jpg';
import './Home.css';
const Home = () => {
  return (
    <>
<Navbar/>
<img src={hos1} alt="Landing"/>

</>
  )
}

export default Home;