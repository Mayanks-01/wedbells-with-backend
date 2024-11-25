// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../CSS/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="WedBells Logo" className="logo" />
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/events">Events Offered</Link></li>
        <li><Link to="/book-event">Book an Event</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/bookings">Bookings</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
