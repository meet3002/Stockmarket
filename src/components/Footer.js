import React from 'react';

const Footer = () => {
  // Inline CSS styles
  const footerStyle = {
    backgroundColor: '#282c34', // Darker background for better contrast
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
    position: 'relative',
    bottom: '0',
    width: '100%',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)', // Add shadow for depth
    display: 'flex',
    flexDirection: 'column', // Stack elements vertically
    alignItems: 'center', // Center align items
  };

  const linkStyle = {
    color: '#61dafb', // Lighter color for links
    textDecoration: 'none',
    margin: '5px 10px', // Margin for spacing
    transition: 'color 0.3s, transform 0.3s', // Smooth transition on hover
    fontWeight: '500', // Slightly bolder for emphasis
  };

  const linkHoverStyle = {
    color: '#21a1f1', // Lighter color on hover
    transform: 'scale(1.1)', // Slightly increase size on hover
  };

  const textStyle = {
    fontSize: '14px',
    marginBottom: '10px', // Space below the text
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

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>
        &copy; {new Date().getFullYear()} Stock App. Created By Mitkumar for Study Purpose.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://www.example.com/privacy"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Privacy Policy
          </a>
          <span style={{ margin: '4px' }}>|</span>
          <a
            href="https://www.example.com/terms"
            style={linkStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
