import React from 'react';

export const authEndpoint = 'https://accounts.spotify.com/authorize';
export const clientId = 'CLIENT_ID';
export const redirectUri = 'http://localhost:8080/';
export const scopes = 'streaming user-top-read user-read-playback-state user-library-read user-library-modify user-read-email user-read-private';

function Login(props) {
  const { token, handleLogout } = props;

  if (token) {
    return (
      <button onClick={handleLogout}>Logout</button>
    );
  }

  const href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=false`;

  return (
    <a href={href}>
      Login to Spotify
    </a>
  );
}

export default Login;
