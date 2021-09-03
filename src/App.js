import React, { useState, useEffect } from 'react';
import './App.css';

import { DataProvider } from './context/DataContext'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Profile from './pages/Profile/Profile'
import EnhancedTable from './Table'
import AppRouter from './routers/AppRouter';


function App() {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
}

export default App;
