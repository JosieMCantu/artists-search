import React from 'react';
import PropTypes from 'prop-types';

function Album({ title, date, id }) {
  const addDefaultSrc = (e) => {
    e.target.src =
      // eslint-disable-next-line max-len
      'https://table9mutant.files.wordpress.com/2016/01/img_5688.jpeg?w=480&h=360';
  };
  return (
    <>
      <h2>{title}</h2>
      <img
        src={`http://coverartarchive.org/release/${id}/front`}
        onError={addDefaultSrc}
        alt="sorry! No album artwork."
        height="300px"
        width="300px"
      />

      <p>{date}</p>
    </>
  );
}

Album.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Album;
