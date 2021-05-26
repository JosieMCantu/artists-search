export const getArtist = async (url) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/artist?query=${url}&fmt=json&limit=25`
  );
  const { artists } = await res.json();

  return artists.map((item) => ({
    id: item.id,
    name: item.name,
  }));
};

export const getAlbums = async (id) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`
  );
  const { releases } = await res.json();
  return releases.map(({ title, id, date }) => ({
    title,
    id,
    date,
  }));
};

export const getSongsById = async (releaseId) => {
  const res = await fetch(
    `http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`
  );
  const { recordings } = await res.json();
  return recordings;
};

export const fetchLyrics = async (artist, song) => {
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  const { lyrics } = await response.json();
  return lyrics;
};
