import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SongList from '../components/songs/SongList';
import { getSongsById } from '../components/songs/Song';

export const useSongs = () => {
  const [loading, setLoading]= useState(true);
  const [songs, setSongs] = useState([]);
  const { artistName, id } = useParams();

  useEffect(() => {
    getSongsById(id)
      .then((songs) => setSongs(songs))
      .finally(() => setLoading(false));
  }, []);
  return [loading, songs, artistName];
};

const SongsContainer = () => {
  const [loading, songs, artistName] = useSongs();
    
  return (
    <div>
      {loading ? (<h1>LOADING...</h1>)
        :(<SongList songs={songs} artistName={artistName} />)}
    </div>
  );
};
export default SongsContainer;


