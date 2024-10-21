import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [identifier, setIdentifier] = useState('123');
  const [password, setPassword] = useState('123');
  const [loading, setLoading] = useState(false); // Loading state for button
  const navigate = useNavigate();

  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    if (styleSheet) {
      styleSheet.insertRule(`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `, styleSheet.cssRules.length);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true
    setTimeout(() => {
      setLoading(false); // Reset loading state after 1 second for demo purposes
      // Check credentials
      if (identifier === '123' && password === '123') {
        navigate('/home');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }, 1000);
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Login</h2>
        <form onSubmit={handleLogin} style={formStyle}>
          <div style={inputContainerStyle}>
            <input
              type="text"
              placeholder="User ID"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={inputContainerStyle}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              required
            />
          </div>
          <div style={buttonContainerStyle}>
            <button type="submit" style={submitButtonStyle} disabled={loading}>
              {loading ? 'Loading...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
  backgroundImage: `url('https://miro.medium.com/max/620/0*dunTLlei47QWR7NR.gif')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  height: '80vh',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
  borderRadius: '10px',
  animation: 'fadeIn 1s ease',
};

const formContainerStyle = {
  backgroundColor: 'rgba(40, 44, 52, 0.7)',
  borderRadius: '10px',
  padding: '80px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
};

const headingStyle = {
  fontSize: '36px',
  marginBottom: '20px',
  textAlign: 'center',
};

const formStyle = {
  width: '100%',
  maxWidth: '450px', // Increased width of the form
};

const inputContainerStyle = {
  marginBottom: '15px',
};

const inputStyle = {
  padding: '10px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ddd',
  transition: 'border-color 0.3s',
  outline: 'none',
  backgroundColor: '#fff',
  color: '#000',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const submitButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.3s',
  opacity: 1,
};

export default Login;
