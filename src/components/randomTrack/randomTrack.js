import React from 'react';

import random from 'src/assets/img/random.svg';
import './style.scss';

function RandomTrack({ token, handleRandomTrack }) {
  if (!token) {
    return null;
  }

  return (
    <button onClick={handleRandomTrack} className="random-button">
      <img src={random} alt="random" />
      Random Track
    </button>
  );
}

export default RandomTrack;
