import React from 'react';
import PlayButton from '../common/playButton';
import FollowButton from '../common/followButton';

import './style.scss';

const Player = (props) => {
  const {
    token, currentUri, currentTrack,
  } = props;

  if (!token || !currentUri) {
    return null;
  }

  return (
    <div className="player">
      <img className="player__image" src={currentTrack.album.images[0].url} alt={currentTrack.album.name} />
      <p>{currentTrack.name}</p>
      <p>
        {currentTrack.artists[0].name}
      </p>
      <div>
        <PlayButton uri={currentUri} />
        <FollowButton id={currentTrack.id} />
      </div>
    </div>
  );
};

export default Player;
