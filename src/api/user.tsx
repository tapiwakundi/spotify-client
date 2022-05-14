import axios from 'axios';
import * as LocalSession from '../utils/sessionStorage'

const token = LocalSession.getLocalAccessToken()

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const getUser = () => axios.get('https://api.spotify.com/v1/me', { headers });

export const getFollowing = () =>
    axios.get('https://api.spotify.com/v1/me/following?type=artist', { headers });

export const getRecentlyPlayed = () =>
    axios.get('https://api.spotify.com/v1/me/player/recently-played', { headers });

export const getPlaylists = () => axios.get('https://api.spotify.com/v1/me/playlists', { headers });

export const getTopArtistsShort = () =>
    axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', {
        headers,
    });
export const getTopArtistsMedium = () =>
    axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term', {
        headers,
    });
export const getTopArtistsLong = () =>
    axios.get('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term', { headers });

export const getTopTracksShort = () =>
    axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term', { headers });
export const getTopTracksMedium = () =>
    axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term', {
        headers,
    });
export const getTopTracksLong = () =>
    axios.get('https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term', { headers });


export const getUserInfo = () =>
    axios
        .all([getUser(), getFollowing(), getPlaylists(), getTopArtistsLong(), getTopTracksLong()])
        .then(
            axios.spread((user, followedArtists, playlists, topArtists, topTracks) => ({
                user: user.data,
                followedArtists: followedArtists.data,
                playlists: playlists.data,
                topArtists: topArtists.data,
                topTracks: topTracks.data,
            })),
        );