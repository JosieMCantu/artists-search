import React from 'react'; 
import PropTypes from 'prop-types'; 

const Lyrics = ({ lyrics }) => (
  <article>{lyrics}</article>
); 

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
}; 


export default Lyrics; 

