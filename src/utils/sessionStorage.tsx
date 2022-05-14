export const setTokenTimestamp = () => window.localStorage.setItem('spotify_token_timestamp', Date.now().toLocaleString());
export const setLocalAccessToken = (token: string) => {
    setTokenTimestamp();
    window.localStorage.setItem('spotify_access_token', token);
};
export const setLocalRefreshToken = (token: string) => window.localStorage.setItem('spotify_refresh_token', token);
export const getTokenTimestamp = () => window.localStorage.getItem('spotify_token_timestamp');
export const getLocalAccessToken = () => window.localStorage.getItem('spotify_access_token');
export const getLocalRefreshToken = () => window.localStorage.getItem('spotify_refresh_token');
export const setUserId = (userId: string) => window.localStorage.setItem('spotify_user_id', userId)
export const getUserId = () => window.localStorage.getItem('spotify_user_id');
