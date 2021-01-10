import React from 'react';
import { useLoginContext, usePlayerContext } from 'src/context';
import { setPauseTrack, setResumePlayback, setStartPlayback } from 'src/utils';
import PlayButtonComponent from './playButton';

const PlayButton = ({ uri }) => {
  const token = useLoginContext();
  const {
    deviceId,
    playback: { paused },
    track_window: { current_track: { uri: currentUri } },
  } = usePlayerContext();

  const handleStartPlayback = () => setStartPlayback(token, deviceId, uri);
  const handlePauseTrack = () => setPauseTrack(token, deviceId);
  const handleResumePlayback = () => setResumePlayback(token, deviceId);

  return (
    <PlayButtonComponent
      uri={uri}
      paused={paused}
      currentUri={currentUri}
      startPlayback={handleStartPlayback}
      pauseTrack={handlePauseTrack}
      resumePlayback={handleResumePlayback}
    />
  );
};

export default PlayButton;
