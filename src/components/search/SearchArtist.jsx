import React from 'react';
import PropTypes from 'prop-types';

function SearchArtist(artist) {
  return (
    <>
      <p>Name: {artist.name}</p>
      {/* <p>Id: {artist.id}</p> */}
    </>
  );
}

SearchArtist.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SearchArtist;
