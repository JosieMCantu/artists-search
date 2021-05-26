import React from 'react';
import PropTypes from 'prop-types';

function Song({ title }) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}

Song.propTypes = {
  // releaseId: PropTypes.string.isRequired,
};

export default Song;
