import React, { useState, useEffect } from 'react';
import './App.css';
import HealthForm from './components/HealthForm';
import HealthTable from './components/HealthTable';
import HealthChart from './components/HealthChart';

function App() {
  const [entries, setEntries] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedEntries = localStorage.getItem('healthEntries');
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  // Save to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem('healthEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = (entry) => {
    setEntries(prev => [...prev, entry]);
  };
  const handleClear = () => {
  if (window.confirm('Are you sure you want to clear all data?')) {
    setEntries([]);
    localStorage.removeItem('healthEntries');
  }
};


  return (
    <div className="app-container">
      <h1>🩺 Health Tracker</h1>
      <HealthForm onAdd={handleAddEntry} />
      <HealthTable entries={entries} />
      <HealthChart entries={entries} />
      <button onClick={handleClear} style={{ marginBottom: '1rem', backgroundColor: 'crimson', color: 'white', width:'100px', height: '40px',borderRadius:'3px'}}>
  Clear All Data
</button>

    </div>
  );
}

export default App;
