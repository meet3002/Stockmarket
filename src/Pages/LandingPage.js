import React from 'react';

const LandingPage = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Our Stock App!</h1>
      <div style={sloganContainerStyle}>
        <input 
          type="text" 
          placeholder="Your slogan goes here..." 
          style={inputStyle} 
        />
      </div>
      <button style={getStartedButtonStyle}>
        Get Started
      </button>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#282c34',
  color: '#ffffff',
};

const headingStyle = {
  fontSize: '36px',
  marginBottom: '20px',
  textAlign: 'center',
};

const sloganContainerStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  padding: '10px',
  width: '300px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '16px',
  color: '#333',
};

const getStartedButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4A90E2',
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '18px',
  transition: 'background-color 0.3s',
};

export default LandingPage;
