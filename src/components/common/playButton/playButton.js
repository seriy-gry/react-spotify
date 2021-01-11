import React from 'react';

import play from 'src/assets/img/play.svg';
import pause from 'src/assets/img/pause.svg';

const PlayButton = (props) => {
  const {
    startPlayback, pauseTrack, resumePlayback, uri, paused, currentUri,
  } = props;

  let onClick = startPlayback;
  let title = 'Play';
  let img = play;

  if (uri === currentUri) {
    if (paused) {
      onClick = resumePlayback;
    } else {
      onClick = pauseTrack;
      title = 'Pause';
      img = pause;
    }
  }

  return (
    <button className="icon-button" onClick={onClick}>
      <img src={img} alt={title} />
    </button>
  );
};

export default PlayButton;
