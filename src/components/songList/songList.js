import React from 'react';
import PlayButton from '../common/playButton';

import './style.scss';

function SongList({ token, list }) {
  if (!token || !list.length) {
    return null;
  }

  return (
    <div className="song-list">
      <h3>Liked Songs</h3>
      <ol>
        {list.map(({ track }) => (
          <li key={track.id}>
            <PlayButton uri={track.uri} />
            {track.artists[0].name}
            {' '}
            -
            {' '}
            {track.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default SongList;
