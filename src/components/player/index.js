import React from 'react';
import { useLoginContext, usePlayerContext } from 'src/context';
import PlayerComponent from './player';

const Player = () => {
  const token = useLoginContext();
  const {
    track_window: { current_track: currentTrack, current_track: { uri } },
  } = usePlayerContext();

  return (
    <PlayerComponent
      token={token}
      currentUri={uri}
      currentTrack={currentTrack}
    />
  );
};

export default Player;
