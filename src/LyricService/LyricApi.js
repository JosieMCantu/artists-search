export const fetchLyrics = async (artist, song) => {
  const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
  const { lyrics } = await response.json();
  return lyrics;
};
