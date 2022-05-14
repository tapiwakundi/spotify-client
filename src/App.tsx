import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {code ? <Route path="/" element={<Dashboard />}>
          </Route>
            :
            <Route path="/" element={<Login />}></Route>
          }
        </Routes>
      </Router>
    </div>

  );
}

export default App;
