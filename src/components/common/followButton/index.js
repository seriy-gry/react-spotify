import React from 'react';
import { useListContext, useListDispatch, useLoginContext } from 'src/context';
import { getUserSavedTracks, setFollowTrack, setUnfollowTrack } from 'src/utils';

import heart from 'src/assets/img/heart.svg';
import heartEmpty from 'src/assets/img/heart-empty.svg';

import FollowButtonComponent from './followButton';

function FollowButton({ id }) {
  const token = useLoginContext();
  const list = useListContext();

  const setList = useListDispatch();

  const isFollowed = list.some(({ track }) => id === track.id);
  const title = isFollowed ? 'Unfollow' : 'Follow';
  const img = isFollowed ? heart : heartEmpty;

  const onClick = () => {
    const setTrack = isFollowed ? setUnfollowTrack : setFollowTrack;

    setTrack(token, id)
      .then(() => getUserSavedTracks(token))
      .then((data) => {
        if (data.items) {
          setList(data.items);
        }
      });
  };

  return (
    <FollowButtonComponent
      img={img}
      title={title}
      onClick={onClick}
    />
  );
}

export default FollowButton;
