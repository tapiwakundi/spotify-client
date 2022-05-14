import axios from 'axios';
import * as LocalSession from '../utils/sessionStorage'

const token = LocalSession.getLocalAccessToken()

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const getArtist = (artistId: string) =>
    axios.get(`https://api.spotify.com/v1/artists/${artistId}`, { headers });

export const followArtist = (artistId: string) => {
    const url = `https://api.spotify.com/v1/me/following?type=artist&ids=${artistId}`;
    return axios({ method: 'put', url, headers });
};

export const doesUserFollowArtist = (artistId: string) =>
    axios.get(`https://api.spotify.com/v1/me/following/contains?type=artist&ids=${artistId}`, {
        headers,
    });