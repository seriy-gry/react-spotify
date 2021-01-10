import React, { useEffect } from 'react';
import { useListContext, useListDispatch, useLoginContext } from 'src/context';
import { getUserSavedTracks } from 'src/utils';
import SongListComponent from './songList';

function SongList() {
  const token = useLoginContext();
  const list = useListContext();
  const setList = useListDispatch();

  useEffect(() => {
    if (!list.length) {
      getUserSavedTracks(token)
        .then((data) => {
          if (data.items) {
            setList(data.items);
          }
        });
    }
  });

  return (
    <SongListComponent
      token={token}
      list={list}
    />
  );
}

export default SongList;
