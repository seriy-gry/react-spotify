import React from 'react';
import {
  authEndpoint, clientId, redirectUri, scopes,
} from 'src/config';

import './style.scss';

function Login(props) {
  const { token, handleLogout } = props;

  if (token) {
    return (
      <button onClick={handleLogout} className="logout-button">Logout</button>
    );
  }

  const href = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=false`;

  return (
    <a href={href} className="login-button">
      Login to Spotify
    </a>
  );
}

export default Login;
