import React from 'react';
import './Navbar.css';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-link">Dashboard</li>
        <li className="nav-link">Login</li>
        <li className="nav-link">Signup</li>
        <NavLink to="/book">
        <li className="nav-link">Book Appointment</li>
        </NavLink>
        <NavLink to="/about">
        <li className="nav-link">About</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
