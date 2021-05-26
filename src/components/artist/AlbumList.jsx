import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function AlbumList({ albums, artistName }) {
  return (
    <>
      <ul aria-label="albums">
        {albums.map((album) => (
          <Link key={album.id} to={`/albums/${artistName}/${album.id}`}>
            <li>
              <Album {...album} />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

AlbumList.propTypes = {
  albums: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    }),
  ).isRequired,
  artistName: PropTypes.string.isRequired
};

export default AlbumList;
