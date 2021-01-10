export function setStartPlayback(token, deviceId, uri) {
  const href = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
  const request = new Request(href, {
    method: 'PUT',
    body: JSON.stringify({ uris: [uri] }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });

  // eslint-disable-next-line no-console
  fetch(request).catch(() => console.error('You need premium account!'));
}

export function setPauseTrack(token, deviceId) {
  const href = `https://api.spotify.com/v1/me/player/pause?device_id=${deviceId}`;
  const request = new Request(href, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });

  // eslint-disable-next-line no-console
  fetch(request).catch(() => console.error('You need premium account!'));
}

export function setResumePlayback(token, deviceId) {
  const href = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
  const request = new Request(href, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });

  // eslint-disable-next-line no-console
  fetch(request).catch(() => console.error('You need premium account!'));
}
