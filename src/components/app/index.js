import React, { useEffect } from 'react';
import {
  LoginProvider, ListProvider, PlayerProvider, useLoginContext, usePlayerDispatch,
} from 'src/context';
import AppComponent from './app';

function App() {
  const token = useLoginContext();
  const { setDeviceId, setPlayback, setTrackWindow } = usePlayerDispatch();

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
    <AppComponent />
  );
}

export default () => (
  <LoginProvider>
    <PlayerProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </PlayerProvider>
  </LoginProvider>
);
