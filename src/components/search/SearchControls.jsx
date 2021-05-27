import React from 'react';
import PropTypes from 'prop-types';

function SearchControls({ url, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search" aria-label="search-bar">
        Search for an artist:
        <input
          id="search"
          onChange={onChange}
          type="text"
          name="search"
          value={url}
        />
      </label>
      <button aria-label="button">Search</button>
    </form>
  );
}

SearchControls.propTypes = {
  url: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchControls;
