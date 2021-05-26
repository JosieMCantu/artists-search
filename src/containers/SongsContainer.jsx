import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import SongList from '../components/songs/SongList';
import {getSongsById} from '../components/songs/Song'

export const useSongs = () => {
    const [loading, setLoading]= useState(true);
    const [songs, setSongs] = useState([]);
    const id = useParams();

    useEffect(()=>{
        getSongsById('59211ea4-ffd2-4ad9-9a4e-941d3148024a')
        .then((songs)=> setSongs(songs))
        .finally(()=>setLoading(false));
    }, []);
    return [loading, songs]
}
const SongsContainer = () => {
    const[loading, songs] = useSongs();
    
    console.log(songs)
    return(
        <div>
            {loading ? (<h1>LOADING...</h1>)
            :(<SongList songs={songs}/>)}
        </div>
    );
};
export default SongsContainer


