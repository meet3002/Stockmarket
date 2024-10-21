import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate(); // Get the navigate function

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#282c34',
    padding: '10px 20px',
    color: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)', // Added shadow for depth
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px', // Increased gap between the links
    margin: 0, // Ensure no default margin for the ul
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '18px',
    transition: 'color 0.3s, transform 0.3s', // Smooth transition for color and transform
  };

  const linkHoverStyle = {
    color: '#ff4081', // Change link color on hover
    transform: 'scale(1.1)', // Slightly increase size on hover
  };

  // Handlers for link hover effects
  const handleMouseEnter = (e) => {
    e.target.style.color = linkHoverStyle.color;
    e.target.style.transform = linkHoverStyle.transform;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = linkStyle.color;
    e.target.style.transform = 'scale(1)'; // Reset scale
  };

  // Handle Logout
  const handleLogout = () => {
    // Add any logout logic here if necessary (like clearing tokens or user state)
    navigate('/login'); // Redirect to Login Page
  };

  return (
    <nav style={navStyle}>
      <div className="logo" style={logoStyle}>
        <h1>Stock App</h1>
      </div>
      <ul style={ulStyle}>
        <li>
          <Link 
            to="/" 
            style={linkStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/stock-tables" 
            style={linkStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            Stock Tables
          </Link>
        </li>
        <li>
          <Link 
            to="/watchlist" 
            style={linkStyle} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            Watchlist
          </Link>
        </li>
        <li>
          <button 
            onClick={handleLogout} // Call handleLogout on click
            style={{ 
              background: 'none', 
              border: 'none', 
              color: '#61dafb', 
              cursor: 'pointer',
              fontSize: '18px',
              transition: 'color 0.3s, transform 0.3s' // Smooth transition for button
            }} 
            onMouseEnter={(e) => {
              e.target.style.color = '#ff4081'; // Change color on hover
              e.target.style.transform = 'scale(1.1)'; // Scale up
            }} 
            onMouseLeave={(e) => {
              e.target.style.color = '#61dafb'; // Reset color
              e.target.style.transform = 'scale(1)'; // Reset scale
            }}
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
