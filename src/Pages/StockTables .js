import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StockTables = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo'
        );
        setStockData(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching stock data');
        setLoading(false);
      }
    };
    fetchStockData();
  }, []);

  // Inline CSS styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#1A1A1A', // Dark background color
    color: '#ffffff', // Light text color for contrast
    minHeight: '60vh', // Ensuring full height
  };

  const tableContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%',
    maxWidth: '1200px',
    margin: '20px 0',
  };

  const tableStyle = {
    borderCollapse: 'collapse',
    width: '100%',
    maxWidth: '350px',
    border: '1px solid #ddd',
    marginBottom: '20px',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.5)',
    backgroundColor: '#2C2C2C',
  };

  const thStyle = {
    backgroundColor: '#4A90E2',
    color: '#ffffff',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
  };

  const tdStyle = {
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    backgroundColor: '#3C3C3C',
    color: '#ffffff',
  };

  const tableHeaderStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.5)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.5)';
  };

  // Handle loading and error states
  if (loading) {
    return <div style={containerStyle}>Loading stock data...</div>;
  }

  if (error) {
    return <div style={containerStyle}>{error}</div>;
  }

  return (
    <div style={containerStyle}>
      {stockData && (
        <div style={tableContainerStyle}>
          {/* Top Gainers Table */}
          <div style={{ flex: '1 1 300px', margin: '10px' }}>
            <div style={tableHeaderStyle}>Top Gainers</div>
            <table
              style={tableStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Ticker</th>
                  <th style={thStyle}>Price</th>
                </tr>
              </thead>
              <tbody>
                {stockData.top_gainers?.slice(0, 6).map((gainer, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{gainer.ticker}</td>
                    <td style={tdStyle}>{gainer.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top Losers Table */}
          <div style={{ flex: '1 1 300px', margin: '10px' }}>
            <div style={tableHeaderStyle}>Top Losers</div>
            <table
              style={tableStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Ticker</th>
                  <th style={thStyle}>Price</th>
                </tr>
              </thead>
              <tbody>
                {stockData.top_losers?.slice(0, 6).map((loser, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{loser.ticker}</td>
                    <td style={tdStyle}>{loser.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Most Actively Traded Table */}
          <div style={{ flex: '1 1 300px', margin: '10px' }}>
            <div style={tableHeaderStyle}>Most Actively Traded</div>
            <table
              style={tableStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <thead>
                <tr>
                  <th style={thStyle}>Ticker</th>
                  <th style={thStyle}>Price</th>
                </tr>
              </thead>
              <tbody>
                {stockData.most_actively_traded?.slice(0, 6).map((active, index) => (
                  <tr key={index}>
                    <td style={tdStyle}>{active.ticker}</td>
                    <td style={tdStyle}>{active.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockTables;
