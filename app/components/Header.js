import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
      <div className="navbar-logo">
        <img src={'https://res.cloudinary.com/dhlsvwpny/image/upload/v1691170817/logo_qzb1s8.png'} alt="Logo" />
      </div>
      <div className={`navbar-items ${isMenuOpen ? 'navbar-items-open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="navbar-toggle">
        <IconButton onClick={handleMenuToggle}>
          <MenuIcon />
        </IconButton>
      </div>
    </nav>
  );
};

export default Navbar;
