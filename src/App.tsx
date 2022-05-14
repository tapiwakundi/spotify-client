import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
import { UserContext } from './context/userContext'
const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return (
    <div className="app">
      <UserContext.Provider value={{
        display_name: '',
        email: ''
      }}>
        {code ? <Dashboard code={code} /> : <Login />}

      </UserContext.Provider>

    </div>

  );
}

export default App;
