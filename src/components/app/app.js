import React, { useEffect } from 'react';
import { useListDispatch, useLoginContext, usePlayerDispatch } from 'src/context';
import Login from '../login';
import Player from '../player';
import SongList from '../songList';

import './style.scss';

function App() {
  const token = useLoginContext();

  const setList = useListDispatch();
  const { setDeviceId, setPlayback, setTrackWindow } = usePlayerDispatch();

  const getUserSavedTracks = () => {
    const request = new Request('https://api.spotify.com/v1/me/tracks', {
      method: 'GET',
      headers: new Headers({ Authorization: `Bearer ${token}` }),
    });

    fetch(request)
      .then((response) => response.json())
      .catch(() => null)
      .then((data) => {
        if (data.items) {
          setList(data.items);
        }
      });
  };

  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      if (token) {
        const player = new Spotify.Player({
          name: 'react-spotify',
          getOAuthToken: (callback) => { callback(token); },
        });

        // Ready
        player.addListener('ready', ({ device_id: id }) => setDeviceId(id));

        // Playback status updates
        player.addListener('player_state_changed', (state) => {
          const {
            duration, position, paused, track_window: trackWindow,
          } = state;

          setPlayback({ duration, position, paused });
          setTrackWindow(trackWindow);
        });

        player.connect();
      }
    };
  });

  return (
    <>
      <Login />
      <main className="content-wrapper">
        <Player />
        {!!token && (
          <>
            <button onClick={getUserSavedTracks}>Get List</button>
            <SongList />
          </>
        )}
      </main>
    </>
  );
}

export default App;
