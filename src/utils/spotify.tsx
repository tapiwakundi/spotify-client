const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://localhost:3000/";
const clientId = "06c481fdcd4f4b95b5adab50779f4822";

const scopes = [
    "streaming",
    "user-read-email",
    "user-read-private",
    "user-follow-read",
    "playlist-read-private",
    "user-library-read",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}`;
