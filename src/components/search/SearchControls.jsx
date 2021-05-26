import React from 'react'
import PropTypes from 'prop-types'

function SearchControls({url, onSubmit, onChange}) {
    return (
        <form onSubmit={onSubmit}>Search for an artist
            <label>
                <input onChange={onChange} type='text' name='search' value={url} />
                <button>Search</button>
            </label>
        </form>
    )
}

SearchControls.propTypes = {
    url: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SearchControls


