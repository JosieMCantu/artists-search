import React from 'react';
import PropTypes from 'prop-types';

function SearchArtist(artist) {
    return (
        <>
            <ul>
                <li>Name: {artist.name}</li>
                <li>Id: {artist.id}</li>
            </ul>
        </>
    )
}

SearchArtist.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default SearchArtist;

