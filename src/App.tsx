import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Settings from './pages/Settings';
import Expenses from './pages/Expenses';
import Reports from './pages/Reports';
import { db } from './db';

function App() {
  useEffect(() => {
    // Initialize the database when the app starts
    const initDb = async () => {
      try {
        await db.initializeDatabase();
        console.log('Database initialized on app start');
      } catch (error) {
        console.error('Failed to initialize database on app start:', error);
      }
    };
    
    initDb();
  }, []);

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex-1 ml-56">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;