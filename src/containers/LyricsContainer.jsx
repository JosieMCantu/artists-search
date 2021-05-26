import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Lyrics from '../components/lyrics/Lyrics'; 
import { fetchLyrics }  from '../LyricService/LyricApi'; 


const LyricsContainer = () => {
  const [loading, setLoading] = useState(true); 
  const [lyrics, setLyrics] = useState(''); 

  // const { artist, title } = useParams();
  
  const artist = 'Coldplay'; 
  const title = 'Adventure of a Lifetime'; 


  useEffect (() => {
    fetchLyrics(artist, title)
      .then(setLyrics)
      .finally(() => setLoading(false)); 
  }, []);

  if(loading) return <h1>Loading...</h1>; 

  return (
    <div>
      <Lyrics lyrics={lyrics}/>
    </div>
  );
};

export default LyricsContainer; 
