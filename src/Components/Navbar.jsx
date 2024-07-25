import React, { useState } from 'react';
import './Navbar.css';
import img2 from "../images/bike.jpg";
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='container'>
      <div className="searchbox">
        <img src={img2} alt='Logo' className='logo' />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FaSearch />
        &nbsp;  &nbsp;
        <input type='text' placeholder='Search' />
        &nbsp;  &nbsp;  &nbsp;

        <div className="button-container">
          <Link to="/login">
            <button className='semi-round-btn'>Login</button>
          </Link>
          &nbsp;  &nbsp;  &nbsp;  &nbsp;  
          <Link to="/Register">
            <button className='semi-round-btn'>Signup</button>
          </Link>
        </div>
      </div>
      <button onClick={toggleMenu} className='toggle-icon'>
        <FontAwesomeIcon icon={faBars} />
        &nbsp;Menu
      </button>
      &nbsp;  &nbsp;
      {isOpen && (
        <ul className='bar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/Register">Signup</Link></li>
          <li><Link to="/Profile">Mechanic</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/ServicesPage">Services</Link></li>
          <li><Link to="/aboutus">About Us</Link></li>
          <li><Link to="/video">Video</Link></li>
          <li><Link to="/accessories">Accessories</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
