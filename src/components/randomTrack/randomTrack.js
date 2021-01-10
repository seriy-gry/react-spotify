import React from 'react';

function RandomTrack({ token, handleRandomTrack }) {
  if (!token) {
    return null;
  }

  return (
    <button onClick={handleRandomTrack}>Random Track</button>
  );
}

export default RandomTrack;
