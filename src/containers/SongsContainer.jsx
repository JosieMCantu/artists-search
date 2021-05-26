import React, {useState, useEffect} from 'react';
import SongList from '../components/songs/SongList';

export const useSongs = () => {
    const [loading, setLoading]= useState(true);
    const [songs, setSongs] = useState([]);

    useEffect(()=>{
        releaseByArtist()
        .then((songs)=> setSongs(songs))
        .finally(()=>setLoading(false));
    }, []);
    return[loading, songs]
}

const SongsContainer = () => {
    const [loading, songs] = useSongs();

    return(
        <div>
            {loading ? (<h1>LOADING...</h1>)
            :(<SongList songs={songs}/>)}
        </div>
    );
};
export default SongsContainer


