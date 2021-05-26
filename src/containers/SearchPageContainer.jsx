import React from 'react';
import {useState} from 'react';
import SearchArtistList from '../components/search/SearchArtistList';
import SearchControls from '../components/search/SearchControls';

//Service
const getArtist = async (url) => {
    const res = await fetch(`http://musicbrainz.org/ws/2/artist?query=${url}&fmt=json&limit=25`);
    const {artists} = await res.json();

    return artists.map((item) => ({
        id: item.id,
        name: item.name,
    }))
}

const SearchPageContainer = () => {

    const [loading, setLoading] = useState();
    const [url, setUrl] = useState('');
    const [artist, setArtist] = useState([]);

    const handleChange = ({target}) => {
        setUrl(target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newArtist = await getArtist(url);
        setArtist(newArtist);
        setLoading(false);
    }

    if(loading){
        return (<h1>Loading...</h1>)
    }
    return (
        <>
        <SearchControls onChange={handleChange} onSubmit={handleSubmit} url={url} />
        <SearchArtistList artist={artist}/>
        </>
    )
}

export default SearchPageContainer;