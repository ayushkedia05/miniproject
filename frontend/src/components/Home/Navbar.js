import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import MedicineCalculator from '../../yash/MedicineCalculator';
import Task from './../../yash/TaskoftheDay'
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Home
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/exercises' className='nav-links' onClick={closeMobileMenu}>
                Exercises
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/nutrition'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Nutrition
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/yoga'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Yoga
              </Link>
            </li>


            <li className='nav-item'>
              <Link
                to='/bmi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bmi
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/diease-prediction'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Disease Detection
              </Link>
            </li>

  

            {/* <li className='nav-item'>
              <Link
                to='/booknow'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Book now
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/MedicineCalculator'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              MedicineCalculator
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/task'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Task
              </Link>
            </li> */}

            {/* <li className='nav-item'>
              <Link
                to='/predict'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Predict
              </Link>
            </li> */}

            

         
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
