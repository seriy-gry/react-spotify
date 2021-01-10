export function getUserSavedTracks(token) {
  const request = new Request('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: new Headers({ Authorization: `Bearer ${token}` }),
  });

  return fetch(request)
    .then((response) => response.json())
    .catch(() => null);
}
