import React, { useEffect } from 'react';
import { useLoginContext, useLoginDispatch } from 'src/context';
import LoginComponent from './login';

const hash = window.location.hash
  .substring(1)
  .split('&')
  .reduce((initial, item) => {
    const result = { ...initial };
    if (item) {
      const parts = item.split('=');
      result[parts[0]] = decodeURIComponent(parts[1]);
    }
    return result;
  }, {});
window.location.hash = '';

function Login() {
  const token = useLoginContext();
  const setToken = useLoginDispatch();

  useEffect(() => {
    let newToken = sessionStorage.getItem('token');

    if (!newToken) {
      newToken = hash.access_token;
      hash.access_token = null;

      if (newToken) {
        sessionStorage.setItem('token', newToken);
      }
    }
    if (newToken) {
      setToken(newToken);
    }
  });

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setToken(null);
  };

  return (
    <LoginComponent
      token={token}
      handleLogout={handleLogout}
    />
  );
}

export default Login;
