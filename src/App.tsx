import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/Login';
import { Artist } from './pages/Artist';
import { UserContext } from './context/userContext'
import { FavoriteTracks } from './pages/FavoriteTracks';
import * as LocalSession from './utils/sessionStorage'
import axios from 'axios';
import { FavoriteArtists } from './pages/FavoriteArtists';
import { Track } from './pages/Track';
import { Album } from './pages/Album';

const code = new URLSearchParams(window.location.search).get('code') || undefined
const localToken = LocalSession.getLocalAccessToken() || undefined

function App() {
  const [token, setToken] = React.useState<string | undefined>(localToken)

  React.useEffect(() => {
    axios
      .post("http://localhost:8000/login", { code })
      .then((response) => {
        window.history.pushState({}, '', "/");
        LocalSession.setLocalAccessToken(response.data.accessToken)
        setToken(response.data.accessToken)
      })
      .catch((e) => {
        console.log(e);

      });
  }, [code]);

  return (
    <div className="app">
      <UserContext.Provider value={{
        display_name: '',
        email: ''
      }}>
        {token ?
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="favorite-tracks" element={<FavoriteTracks />} />
              <Route path="favorite-artists" element={<FavoriteArtists />} />
              <Route path="artist/:id" element={<Artist />} />
              <Route path="track/:id" element={<Track />} />
              <Route path="album/:id" element={<Album />} />

            </Routes>
          </Router>
          : <Login />
        }

      </UserContext.Provider>

    </div>

  );
}

export default App;
