import React from 'react';

function FollowButton({ title, onClick, img }) {
  return (
    <button onClick={onClick} className="icon-button">
      <img src={img} alt={title} />
    </button>
  );
}

export default FollowButton;
