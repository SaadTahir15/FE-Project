// src/Navbar.jsx
import React from 'react';
import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './navbar.css';

const signInButtonStyle = {
  borderRadius: '50px',
  color: 'black',
  border: 'none',
  backgroundColor: 'transparent',
  textTransform: 'none'
};

const getStartedButtonStyle = {
  borderRadius: '50px',
  color: 'black',
  backgroundColor: '#DDDDDD',
  textTransform: 'none'
};

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-left">
      <Link to="/" className="navbar-brand"> <SportsSoccerSharpIcon style={{ fontSize:'large'}}/> SoccerSphere</Link>
    </div>
    <div className="navbar-center">
      <Link to="/">Home</Link>
      <Link to="/forum">Forum</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <div className="navbar-right">
      <Button 
        component={Link} 
        to="/login" 
        variant="outlined" 
        color="primary" 
        style={signInButtonStyle}
        disableRipple
      >
        Sign In
      </Button>
      <Button 
        component={Link} 
        to="/get-started" 
        variant="contained" 
        color="primary" 
        style={getStartedButtonStyle}
      >
        Get Started
      </Button>
    </div>
  </nav>
);

export default Navbar;
