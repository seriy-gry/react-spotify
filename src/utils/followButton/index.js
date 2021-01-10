export function setFollowTrack(token, trackId) {
  const href = `https://api.spotify.com/v1/me/tracks?ids=${trackId}`;
  const request = new Request(href, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });

  return fetch(request);
}

export function setUnfollowTrack(token, trackId) {
  const href = `https://api.spotify.com/v1/me/tracks?ids=${trackId}`;
  const request = new Request(href, {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });

  return fetch(request);
}
