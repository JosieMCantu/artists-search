import React from 'react'
import PropTypes from 'prop-types'


export const getSongById = async (releaseId) => {
    const res = await fetch('http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json');
    const {title, artist, date, country, label} = await res.json();
    return{
        title,
        artist,
        date,
        country,
        label,
    }
} 
function Song(releaseId) {
    const {title, artist, date, country, label} =getSongById(releaseId);

    return (
        <div>
            <p>{title}</p>
            <p>{artist}</p>
            <p>{date}</p>
            <p>{country}</p>
            <p>{label}</p>
        </div>
    )
}

Song.propTypes = {
    releaseId: PropTypes.string.isRequired,
}

export default Song

