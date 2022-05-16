import axios from 'axios';
import * as LocalSession from '../utils/sessionStorage'

const token = LocalSession.getLocalAccessToken()

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const getAlbum = (albumId: string) => {
    return axios.get(`https://api.spotify.com/v1/albums/${albumId}`, { headers });
}

export const getTracksFromAlbum = (albumId: string) => {
    return axios.get(`https://api.spotify.com/v1/albums/${albumId}/tracks`, { headers });
}
