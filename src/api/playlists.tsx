import * as LocalSession from '../utils/sessionStorage'
import axios from 'axios';

const token = LocalSession.getLocalAccessToken()
const userId = LocalSession.getUserId()

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};


export const doesUserFollowPlaylist = (playlistId: string) =>
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/followers/contains?ids=${userId}`, {
        headers,
    });

export const createPlaylist = (name: string) => {
    const url = `https://api.spotify.com/v1/users/${userId}/playlists`;
    const data = JSON.stringify({ name });
    return axios({ method: 'post', url, headers, data });
};

export const addTracksToPlaylist = (playlistId: string, uris: string[]) => {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks?uris=${uris}`;
    return axios({ method: 'post', url, headers });
};


export const followPlaylist = (playlistId: string) => {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/followers`;
    return axios({ method: 'put', url, headers });
};

export const getPlaylist = (playlistId: string) =>
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}`, { headers });

export const getPlaylistTracks = (playlistId: string) =>
    axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, { headers });