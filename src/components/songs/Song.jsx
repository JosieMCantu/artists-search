import React from 'react'
import PropTypes from 'prop-types'


export const getSongsById = async (releaseId) => {
    const res = await fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`);
    const {recordings} = await res.json();
    return recordings;

} 
function Song({title}) {
    return (
        <div>
            <p>{title}</p>
        </div>
    )
}

Song.propTypes = {
    // releaseId: PropTypes.string.isRequired,
}

export default Song

