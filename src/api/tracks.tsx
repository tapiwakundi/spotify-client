import axios from 'axios';
import { Track } from '../types/Track';
import * as LocalSession from '../utils/sessionStorage'
const token = LocalSession.getLocalAccessToken()

const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
};

export const getTrack = (trackId: string) => axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, { headers });

export const getTrackAudioAnalysis = (trackId: string) => axios.get(`https://api.spotify.com/v1/audio-analysis/${trackId}`, { headers });

export const getTrackAudioFeatures = (trackId: string) => axios.get(`https://api.spotify.com/v1/audio-features/${trackId}`, { headers });

export const getTrackInfo = (trackId: string) =>
    axios
        .all([getTrack(trackId), getTrackAudioAnalysis(trackId), getTrackAudioFeatures(trackId)])
        .then(
            axios.spread((track, audioAnalysis, audioFeatures) => ({
                track: track.data,
                audioAnalysis: audioAnalysis.data,
                audioFeatures: audioFeatures.data,
            })),
        );

export const getAudioFeaturesForTracks = (tracks: Track[]) => {
    const ids = getTrackIds(tracks);
    return axios.get(`https://api.spotify.com/v1/audio-features?ids=${ids}`, { headers });
};

export const getRecommendationsForTracks = (tracks: Track[]) => {
    const shuffledTracks = tracks.sort(() => 0.5 - Math.random());
    const seed_tracks = getTrackIds(shuffledTracks.slice(0, 5));
    const seed_artists = '';
    const seed_genres = '';

    return axios.get(
        `https://api.spotify.com/v1/recommendations?seed_tracks=${seed_tracks}&seed_artists=${seed_artists}&seed_genres=${seed_genres}`,
        {
            headers,
        },
    );
};

export const getTrackIds = (tracks: Track[]) => tracks.map((track) => track.id).join(',');
