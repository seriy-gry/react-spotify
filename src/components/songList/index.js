import React from 'react';
import { useListContext } from 'src/context';
import SongListComponent from './songList';

function SongList() {
  const list = useListContext();

  return (
    <SongListComponent list={list} />
  );
}

export default SongList;
