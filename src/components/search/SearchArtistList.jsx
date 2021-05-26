import React from 'react';
import PropTypes from 'prop-types';
import SearchArtist from './SearchArtist';


function SearchArtistList({artist}) {
    return (
        <ul>{artist.map((item) => (
            <li key={item.id}>
                <SearchArtist {...item} />
            </li>
        ))}
        </ul>
    )
}

SearchArtistList.propTypes = {
    artist: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    )
}

export default SearchArtistList;

