import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo'
        );
        setStockData(response.data);
      } catch (error) {
        console.error("Error fetching the stock data", error);
        setError('Failed to fetch stock data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchStockData();
  }, []);

  // Inline CSS styles
  const styles = {
    container: {
      padding: '20px 20px 10px',
      fontFamily: 'Arial, sans-serif',
      color: '#eee',
      background: 'linear-gradient(to bottom right, #2C3E50, #34495E)',
      minHeight: '75vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '5px',
      marginTop: '0',
      textAlign: 'center',
      color: '#ffffff',
      textShadow: '1px 1px 3px rgba(0,0,0,0.7)',
    },
    stockInfo: {
      backgroundColor: '#1A252F',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'left',
      margin: '10px 20px',
      width: '90%',
      maxWidth: '600px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      overflow: 'hidden',
    },
    stockInfoHover: {
      transform: 'scale(1.03)',
      boxShadow: '0 12px 50px rgba(0, 0, 0, 0.3)',
    },
    label: {
      fontWeight: 'bold',
      marginTop: '10px',
      fontSize: '20px',
      color: '#ffffff',
    },
    value: {
      fontSize: '22px',
      marginBottom: '10px',
      color: '#4A90E2',
      fontWeight: 'normal',
    },
    highValue: {
      fontSize: '22px',
      marginBottom: '10px',
      color: 'lightgreen',
      fontWeight: 'normal',
    },
    lowValue: {
      fontSize: '22px',
      marginBottom: '10px',
      color: 'lightcoral',
      fontWeight: 'normal',
    },
    error: {
      color: 'red',
      fontSize: '18px',
      marginTop: '20px',
    },
  };

  // Get the necessary values for comparison
  const lastRefreshed = stockData?.["Meta Data"]["3. Last Refreshed"];
  const openValue = parseFloat(stockData?.["Time Series (Daily)"][lastRefreshed]["1. open"]);
  const lowValue = parseFloat(stockData?.["Time Series (Daily)"][lastRefreshed]["3. low"]);

  const openValueStyle = {
    ...styles.value,
    color: openValue > lowValue ? 'lightgreen' : 'lightcoral',
  };

  const openArrow = openValue > lowValue ? '↑' : '↓';

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Real-time Price Updates</h2>
      {loading && <p>Loading stock data...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {stockData && (
        <div
          style={styles.stockInfo}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = styles.stockInfoHover.transform;
            e.currentTarget.style.boxShadow = styles.stockInfoHover.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
          }}
        >
          <h3 style={styles.label}>Symbol: <span style={styles.value}>{stockData["Meta Data"]["2. Symbol"]}</span></h3>
          <p style={styles.label}>Last Refreshed: <span style={styles.value}>{lastRefreshed}</span></p>
          <p style={styles.label}>
            Open: <span style={openValueStyle}>{openValue} {openArrow}</span>
          </p>
          <p style={styles.label}>
            High: <span style={styles.highValue}>{stockData["Time Series (Daily)"][lastRefreshed]["2. high"]} ↑</span>
          </p>
          <p style={styles.label}>
            Low: <span style={styles.lowValue}>{lowValue} ↓</span>
          </p>
          <p style={styles.label}>Close: <span style={styles.value}>{stockData["Time Series (Daily)"][lastRefreshed]["4. close"]}</span></p>
        </div>
      )}
    </div>
  );
};

export default Home;
