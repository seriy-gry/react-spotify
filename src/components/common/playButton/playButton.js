import React from 'react';

const PlayButton = (props) => {
  const {
    startPlayback, pauseTrack, resumePlayback, uri, paused, currentUri,
  } = props;

  let onClick = startPlayback;
  let title = 'Play';

  if (uri === currentUri) {
    if (paused) {
      onClick = resumePlayback;
    } else {
      onClick = pauseTrack;
      title = 'Pause';
    }
  }

  return (
    <button onClick={onClick}>{title}</button>
  );
};

export default PlayButton;
