import React from 'react';
import Login from '../login';
import Player from '../player';
import SongList from '../songList';
import RandomTrack from '../randomTrack';

import './style.scss';

function App() {
  return (
    <main className="content-wrapper">
      <Player />
      <SongList />
      <RandomTrack />
      <Login />
    </main>
  );
}

export default App;
