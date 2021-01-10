import React from 'react';
import PlayButton from '../common/playButton';

function SongList({ token, list }) {
  if (!token || !list.length) {
    return null;
  }

  return (
    <div>
      <h4>Liked Songs</h4>
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
