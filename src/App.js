import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import StockTables from './Pages/StockTables ';
import Watchlist from './Pages/Watchlist';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/stock-tables" element={<StockTables />} />
        <Route path="/Logout" element={<LandingPage />} />
        <Route path="/login" element={<Login />} /> {/* Route for Login */}
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
  