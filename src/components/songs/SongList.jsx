import React from 'react';
import PropTypes from 'prop-types';
import Song from './Song';
import { Link } from 'react-router-dom';
import styles from '../app/App.css';

function SongList({ songs, artistName }) {
  return (
    <ul aria-label="songs" className={styles.listPoints}>
      {songs.map((song) => (
        <li key={song.id}>
          <Link to={`/song/${artistName}/${song.title}`}>
            <Song title={song.title} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

SongList.propTypes = {
  songs: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string.isRequired,
      // title: PropTypes.string.isRequired,
      // artist: PropTypes.string.isRequired,
      // date: PropTypes.string.isRequired,
      // country: PropTypes.string.isRequired,
      // label: PropTypes.string.isRequired,
    })
  ),
};

export default SongList;
