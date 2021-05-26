import React from 'react';
import PropTypes from 'prop-types';
import SearchArtist from './SearchArtist';
import { Link } from 'react-router-dom';


function SearchArtistList({ artist }) {
  return (
    <ul aria-label="search">{artist.map((item) => (
      <li key={item.id}><Link to={`/${item.name}/${item.id}`}>
        <SearchArtist {...item} />
      </Link>
      </li>
    ))}
    </ul>
  );
}

SearchArtistList.propTypes = {
  artist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  )
};

export default SearchArtistList;

