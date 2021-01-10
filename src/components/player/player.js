import React from 'react';
import PlayButton from '../common/playButton';
import FollowButton from '../common/followButton';

const Player = (props) => {
  const {
    token, currentUri, currentTrack,
  } = props;

  if (!token || !currentUri) {
    return null;
  }

  return (
    <div>
      <div>
        <img src={currentTrack.album.images[0].url} alt="" />
        <p>{currentTrack.name}</p>
        <p>
          {currentTrack.artists[0].name}
        </p>
        <PlayButton uri={currentUri} />
        <FollowButton id={currentTrack.id} />
      </div>
    </div>
  );
};

export default Player;
