import React from 'react'; 
import PropTypes from 'prop-types'; 

const Lyrics = ({ lyrics }) => (
  <div>{lyrics}</div>
); 

Lyrics.propTypes = {
  lyrics: PropTypes.string.isRequired
}; 


export default Lyrics; 

