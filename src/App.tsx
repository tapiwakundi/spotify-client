import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { UserContext } from './context/userContext'
import { FavoriteTracks } from './pages/FavoriteTracks';
const code = new URLSearchParams(window.location.search).get('code')

function App() {

  return (
    <div className="app">
      <UserContext.Provider value={{
        display_name: '',
        email: ''
      }}>
        {code ?
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard code={code} />} />
              <Route path="favorite-tracks" element={<FavoriteTracks />} />
            </Routes>
          </Router>
          : <Login />
        }

      </UserContext.Provider>

    </div>

  );
}

export default App;
