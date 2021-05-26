import React from 'react';
import { useState, useEffect } from 'react';
import SearchArtistList from '../components/search/SearchArtistList';
import SearchControls from '../components/search/SearchControls';
import Pagination from '../components/pagination/Pagination';
import { getArtist } from '../services/apiUtils';

const SearchPageContainer = () => {
  const [loading, setLoading] = useState();
  const [url, setUrl] = useState('');
  const [artist, setArtist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const handleChange = ({ target }) => {
    setUrl(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const newArtist = await getArtist(url);
    setArtist(newArtist);
    setLoading(false);
  };

  useEffect(() => {
    if (url.length > 0) {
      getArtist(url)
        .then(setArtist)
        .finally(() => setLoading(false));
    }
  }, [currentPage]);

  const setIndex = (currentPage, perPage, artist) => {
    const lastPerPage = currentPage * perPage;
    const firstPerPage = lastPerPage - perPage;
    const result = artist.slice(firstPerPage, lastPerPage);
    return result;
  };

  const paginatedArtists = setIndex(currentPage, perPage, artist);
  const lastPage = artist.length / perPage;

  const handleButtonChange = ({ target }) => {
    if (target.value === 'next') {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <SearchControls
        onChange={handleChange}
        onSubmit={handleSubmit}
        url={url}
      />
      <SearchArtistList artist={paginatedArtists} />
      <Pagination
        onClick={handleButtonChange}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </>
  );
};

export default SearchPageContainer;
