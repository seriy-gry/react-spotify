function getRandomQuery() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  // Gets a random characters from the alphabet.
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    + alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

export function getRandomTrack(token) {
  const randomOffset = Math.floor(Math.random() * 100);

  const href = `https://api.spotify.com/v1/search?q=${getRandomQuery()}&type=track&offset=${randomOffset}`;
  const request = new Request(href, {
    method: 'GET',
    headers: new Headers({
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    }),
  });

  return fetch(request).then((response) => response.json());
}
