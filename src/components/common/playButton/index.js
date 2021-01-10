import React from 'react';
import { useLoginContext, usePlayerContext } from 'src/context';
import PlayButtonComponent from './playButton';

const PlayButton = ({ uri }) => {
  const token = useLoginContext();
  const {
    deviceId,
    playback: { paused },
    track_window: { current_track: { uri: currentUri } },
  } = usePlayerContext();

  function startPlayback() {
    const href = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
    const request = new Request(href, {
      method: 'PUT',
      body: JSON.stringify({ uris: [uri] }), // <--
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });

    // eslint-disable-next-line no-console
    fetch(request).catch(() => console.error('You need premium account!'));
  }

  function pauseTrack() {
    const href = `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`;
    const request = new Request(href, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });

    // eslint-disable-next-line no-console
    fetch(request).catch(() => console.error('You need premium account!'));
  }

  function resumePlayback() {
    const href = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
    const request = new Request(href, {
      method: 'PUT',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    });

    // eslint-disable-next-line no-console
    fetch(request).catch(() => console.error('You need premium account!'));
  }

  return (
    <PlayButtonComponent
      uri={uri}
      paused={paused}
      currentUri={currentUri}
      startPlayback={startPlayback}
      pauseTrack={pauseTrack}
      resumePlayback={resumePlayback}
    />
  );
};

export default PlayButton;
