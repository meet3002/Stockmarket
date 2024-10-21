import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Watchlist = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [watchlist, setWatchlist] = useState([]);
  const [marketData, setMarketData] = useState({});

  useEffect(() => {
    // Sample list of favorite companies (more than 100)
    const sampleCompanies = [
      { ticker: 'AAPL', name: 'Apple Inc.' },
      { ticker: 'GOOGL', name: 'Alphabet Inc.' },
      { ticker: 'AMZN', name: 'Amazon.com, Inc.' },
      { ticker: 'MSFT', name: 'Microsoft Corporation' },
      { ticker: 'TSLA', name: 'Tesla, Inc.' },
      { ticker: 'FB', name: 'Meta Platforms, Inc.' },
      { ticker: 'NFLX', name: 'Netflix, Inc.' },
      { ticker: 'NVDA', name: 'NVIDIA Corporation' },
      { ticker: 'PYPL', name: 'PayPal Holdings, Inc.' },
      { ticker: 'CSCO', name: 'Cisco Systems, Inc.' },
      { ticker: 'ADBE', name: 'Adobe Inc.' },
      { ticker: 'INTC', name: 'Intel Corporation' },
      { ticker: 'CMCSA', name: 'Comcast Corporation' },
      { ticker: 'PEP', name: 'PepsiCo, Inc.' },
      { ticker: 'KO', name: 'Coca-Cola Company' },
      { ticker: 'WMT', name: 'Walmart Inc.' },
      { ticker: 'JNJ', name: 'Johnson & Johnson' },
      { ticker: 'V', name: 'Visa Inc.' },
      { ticker: 'MA', name: 'Mastercard Incorporated' },
      { ticker: 'PFE', name: 'Pfizer Inc.' },
      { ticker: 'MRK', name: 'Merck & Co., Inc.' },
      { ticker: 'T', name: 'AT&T Inc.' },
      { ticker: 'DIS', name: 'Walt Disney Company' },
      { ticker: 'XOM', name: 'Exxon Mobil Corporation' },
      { ticker: 'CVX', name: 'Chevron Corporation' },
      { ticker: 'NKE', name: 'NIKE, Inc.' },
      { ticker: 'IBM', name: 'International Business Machines Corporation' },
      { ticker: 'TXN', name: 'Texas Instruments Incorporated' },
      { ticker: 'ORCL', name: 'Oracle Corporation' },
      { ticker: 'QCOM', name: 'QUALCOMM Incorporated' },
      { ticker: 'NFLX', name: 'Netflix, Inc.' },
      { ticker: 'BA', name: 'The Boeing Company' },
      { ticker: 'MCD', name: 'McDonald\'s Corporation' },
      { ticker: 'MDLZ', name: 'Mondelez International, Inc.' },
      { ticker: 'SBUX', name: 'Starbucks Corporation' },
      { ticker: 'CSX', name: 'CSX Corporation' },
      { ticker: 'UPS', name: 'United Parcel Service, Inc.' },
      { ticker: 'LMT', name: 'Lockheed Martin Corporation' },
      { ticker: 'COST', name: 'Costco Wholesale Corporation' },
      { ticker: 'AMGN', name: 'Amgen Inc.' },
      { ticker: 'NEM', name: 'Newmont Corporation' },
      { ticker: 'SPGI', name: 'S&P Global Inc.' },
      { ticker: 'NOW', name: 'ServiceNow, Inc.' },
      { ticker: 'ZM', name: 'Zoom Video Communications, Inc.' },
      { ticker: 'FIS', name: 'Fidelity National Information Services, Inc.' },
      { ticker: 'TGT', name: 'Target Corporation' },
      { ticker: 'BKNG', name: 'Booking Holdings Inc.' },
      { ticker: 'ATVI', name: 'Activision Blizzard, Inc.' },
      { ticker: 'ISRG', name: 'Intuitive Surgical, Inc.' },
      { ticker: 'ADP', name: 'Automatic Data Processing, Inc.' },
      { ticker: 'BIIB', name: 'Biogen Inc.' },
      { ticker: 'CI', name: 'Cigna Corporation' },
      { ticker: 'HIG', name: 'The Hartford Financial Services Group, Inc.' },
      { ticker: 'CME', name: 'CME Group Inc.' },
      { ticker: 'LRCX', name: 'Lam Research Corporation' },
      { ticker: 'MAR', name: 'Marriott International, Inc.' },
      { ticker: 'PH', name: 'Parker-Hannifin Corporation' },
      { ticker: 'ETR', name: 'Entergy Corporation' },
      { ticker: 'CDW', name: 'CDW Corporation' },
      { ticker: 'MSI', name: 'Motorola Solutions, Inc.' },
      { ticker: 'PSA', name: 'Public Storage' },
      { ticker: 'DHR', name: 'Danaher Corporation' },
      { ticker: 'AON', name: 'Aon plc' },
      { ticker: 'KMB', name: 'Kimberly-Clark Corporation' },
      { ticker: 'NTRS', name: 'Northern Trust Corporation' },
      { ticker: 'WBA', name: 'Walgreens Boots Alliance, Inc.' },
      { ticker: 'TDY', name: 'Teledyne Technologies Incorporated' },
      { ticker: 'SYY', name: 'Sysco Corporation' },
      { ticker: 'ZTS', name: 'Zoetis Inc.' },
      { ticker: 'HLT', name: 'Hilton Worldwide Holdings Inc.' },
      { ticker: 'APD', name: 'Air Products and Chemicals, Inc.' },
      { ticker: 'RMD', name: 'ResMed Inc.' },
      { ticker: 'LNT', name: 'Alliant Energy Corporation' },
      { ticker: 'NDAQ', name: 'Nasdaq, Inc.' },
      { ticker: 'PAYC', name: 'Paycor HCM, Inc.' },
      { ticker: 'VRSK', name: 'Verisk Analytics, Inc.' },
      { ticker: 'ESS', name: 'Essex Property Trust, Inc.' },
      { ticker: 'MSCI', name: 'MSCI Inc.' },
      { ticker: 'AJG', name: 'Arthur J. Gallagher & Co.' },
      { ticker: 'VFC', name: 'V.F. Corporation' },
      { ticker: 'SRE', name: 'Sempra Energy' },
      { ticker: 'PEG', name: 'Public Service Enterprise Group Incorporated' },
      { ticker: 'TPR', name: 'Tapestry, Inc.' },
      { ticker: 'TSN', name: 'Tyson Foods, Inc.' },
      { ticker: 'PRGO', name: 'Perrigo Company plc' },
      { ticker: 'DLR', name: 'Digital Realty Trust, Inc.' },
      { ticker: 'K', name: 'Kellogg Company' },
      { ticker: 'FITB', name: 'Fifth Third Bancorp' },
      { ticker: 'SNPS', name: 'Synopsys, Inc.' },
      { ticker: 'KMX', name: 'CarMax, Inc.' },
      { ticker: 'CAG', name: 'Conagra Brands, Inc.' },
      { ticker: 'GLW', name: 'Corning Inc.' },
      { ticker: 'NDAQ', name: 'Nasdaq, Inc.' },
      { ticker: 'KEY', name: 'KeyCorp' },
      { ticker: 'VTRS', name: 'Viatris Inc.' },
      { ticker: 'DOV', name: 'Dover Corporation' },
      { ticker: 'QRVO', name: 'Qorvo, Inc.' },
      { ticker: 'OKE', name: 'OneMain Holdings, Inc.' },
      { ticker: 'DRI', name: 'Darden Restaurants, Inc.' },
      { ticker: 'MS', name: 'Morgan Stanley' },
      { ticker: 'BDX', name: 'Becton, Dickinson and Company' },
      { ticker: 'ALGN', name: 'Align Technology, Inc.' },
      { ticker: 'RCL', name: 'Royal Caribbean Group' },
      { ticker: 'HST', name: 'Host Hotels & Resorts, Inc.' },
      { ticker: 'NWL', name: 'Newell Brands Inc.' },
      { ticker: 'RMD', name: 'ResMed Inc.' },
      { ticker: 'AAP', name: 'Advance Auto Parts, Inc.' },
      { ticker: 'ALB', name: 'Albemarle Corporation' },
      { ticker: 'DRE', name: 'Duke Realty Corporation' },
      { ticker: 'SEE', name: 'Sealed Air Corporation' },
      { ticker: 'LNT', name: 'Alliant Energy Corporation' },
      { ticker: 'ESS', name: 'Essex Property Trust, Inc.' },
      { ticker: 'WAB', name: 'Westinghouse Air Brake Technologies Corporation' },
      { ticker: 'CZR', name: 'Caesars Entertainment, Inc.' },
      { ticker: 'VTR', name: 'Ventas, Inc.' },
      { ticker: 'REXR', name: 'Rexford Industrial Realty, Inc.' },
      { ticker: 'LNT', name: 'Alliant Energy Corporation' },
    ];

    setCompanies(sampleCompanies);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const addToWatchlist = (company) => {
    if (!watchlist.includes(company)) {
      setWatchlist([...watchlist, company]);
    }
  };

  const removeFromWatchlist = (company) => {
    setWatchlist(watchlist.filter((c) => c.ticker !== company.ticker));
  };

  const fetchMarketData = async (ticker) => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=1min&apikey=demo`
      );
      return response.data['Time Series (1min)'];
    } catch (error) {
      console.error('Error fetching market data:', error);
    }
  };

  const handleMarketData = async () => {
    const dataPromises = watchlist.map(async (company) => {
      const data = await fetchMarketData(company.ticker);
      return { ...company, price: data ? data[Object.keys(data)[0]]['1. open'] : 'N/A' };
    });
    const data = await Promise.all(dataPromises);
    setMarketData(data);
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Your Watchlist</h2>
      <input
        type="text"
        placeholder="Search for a stock..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={searchInputStyle}
      />

      {searchTerm && (
        <div style={listContainerStyle}>
          {companies
            .filter((company) => company.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((company) => (
              <div key={company.ticker} style={listItemStyle}>
                <span style={companyNameStyle}>{company.name}</span>
                <button
                  onClick={() => addToWatchlist(company)}
                  style={addButtonStyle}
                >
                  ❤️
                </button>
              </div>
            ))}
        </div>
      )}

      <h3 style={watchlistHeadingStyle}>Watchlist</h3>
      <div style={watchlistContainerStyle}>
        {watchlist.map((company) => (
          <div key={company.ticker} style={watchlistItemStyle}>
            <span style={companyNameStyle}>{company.name}</span>
            <span style={priceStyle}>Price: ${marketData[company.ticker]?.price || 'Loading...'}</span>
            <button
              onClick={() => removeFromWatchlist(company)}
              style={removeButtonStyle}
            >
              🗑️
            </button>
          </div>
        ))}
        <button onClick={handleMarketData} style={updateButtonStyle}>
          Update Prices
        </button>
      </div>
    </div>
  );
};

// Inline CSS styles
const containerStyle = {
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
  color: '#fff',
  backgroundColor: '#121212',
  borderRadius: '10px',
  minHeight: '80vh',
};

const headingStyle = {
  fontSize: '36px',
  marginBottom: '20px',
};

const searchInputStyle = {
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  width: '100%',
};

const listContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '20px',
};

const listItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
  backgroundColor: '#1e1e1e',
};

const companyNameStyle = {
  fontSize: '18px',
};

const addButtonStyle = {
  padding: '5px 10px',
  backgroundColor: 'transparent',
  color: '#4CAF50',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px', // Increase size for better visibility
};

const watchlistHeadingStyle = {
  fontSize: '28px',
  margin: '20px 0',
};

const watchlistContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const watchlistItemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  marginBottom: '10px',
  backgroundColor: '#1e1e1e',
};

const priceStyle = {
  fontSize: '16px',
  color: '#4A90E2',
};

const removeButtonStyle = {
  padding: '5px 10px',
  backgroundColor: 'transparent',
  color: '#d9534f',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px', // Increase size for better visibility
};

const updateButtonStyle = {
  padding: '10px 15px',
  backgroundColor: '#2196F3',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
};

export default Watchlist;
