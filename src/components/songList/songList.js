import React from 'react';
import PlayButton from '../common/playButton';

function SongList({ list }) {
  if (!list.length) {
    return null;
  }

  return (
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
  );
}

export default SongList;
