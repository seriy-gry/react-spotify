import React from 'react';

function FollowButton({ title, onClick }) {
  return (
    <button onClick={onClick}>{title}</button>
  );
}

export default FollowButton;
