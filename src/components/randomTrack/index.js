import React from 'react';
import { useLoginContext, usePlayerContext, usePlayerDispatch } from 'src/context';
import { setStartPlayback, getRandomTrack } from 'src/utils';
import RandomTrackComponent from './randomTrack';

function RandomTrack() {
  const token = useLoginContext();
  const { deviceId } = usePlayerContext();
  const { setTrackWindow } = usePlayerDispatch();

  function handleRandomTrack() {
    getRandomTrack(token)
      .then((data) => {
        const { tracks: { items: [item] } } = data;

        setTrackWindow({
          current_track: item,
          next_track: [],
          previous_track: [],
        });
        setStartPlayback(token, deviceId, item.uri);
      });
  }

  return (
    <RandomTrackComponent
      token={token}
      handleRandomTrack={handleRandomTrack}
    />
  );
}

export default RandomTrack;
