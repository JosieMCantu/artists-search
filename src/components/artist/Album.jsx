import React from 'react';
import PropTypes from 'prop-types';

function Album({ title, date, id }) {
  return (
    <>
      <h2>{title}</h2>
      <img
        src={`http://coverartarchive.org/release/${id}/front`}
        alt="sorry! No album artwork."
        height="300px"
        width="300px"
      />

      <li>{date}</li>
    </>
  );
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
