import axios from 'axios';

type Headers = {
    Authorization: string,
    'Content-Type': string,
}

export class SpotifyApi {
    headers: Headers

    constructor(accessToken: string) {
        this.headers = {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        };
    }


    getUser() {
        axios.get('https://api.spotify.com/v1/me', { headers: this.headers });
    }
}