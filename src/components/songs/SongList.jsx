import React from 'react'
import PropTypes from 'prop-types'
import Song from './Song'

function SongList(songs) {
    return (
        <ul aria-label = 'songs'>
            {songs.map((song)=>(
                <li key={song.id}>
                <Link to={`/song/${song.artist}/${song.title}`}>
                    <Song
                    id={song.id}
                    />
                </Link>
                </li>
            ))}
        </ul>
    )
}

SongList.propTypes = {
    songs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            artist: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        })
    )

}

export default SongList

