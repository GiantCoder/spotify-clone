const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
console.log("Client ID:", clientId);

export const authEndpoint = "https://accounts.spotify.com/authorize";

export const redirectUri = "http://localhost:3000/";

export const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
