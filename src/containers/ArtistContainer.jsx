import React, { useState, useEffect } from 'react';
import AlbumList from '../components/artist/AlbumList';
import Pagination from '../components/pagination/Pagination';
import { useParams } from 'react-router-dom';

const ArtistContainer = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const getArtist = async (id) => {
    const res = await fetch(
      `http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`
    );
    const { releases } = await res.json();
    return releases.map(({ title, id, date }) => ({
      title,
      id,
      date,
    }));
  };

  useEffect(() => {
    getArtist(id)
      .then(setArtist)
      .finally(() => setLoading(false));
  }, [currentPage]);

  const setIndex = (currentPage, perPage, artist) => {
    const lastPerPage = currentPage * perPage;
    const firstPerPage = lastPerPage - perPage;
    const result = artist.slice(firstPerPage, lastPerPage);
    return result;
  };

  const paginatedAlbums = setIndex(currentPage, perPage, artist);
  const lastPage = artist.length / perPage;

  const handleButtonChange = ({ target }) => {
    if (target.value === 'next') {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <main>
        <AlbumList albums={paginatedAlbums} />
      </main>
      <Pagination
        onClick={handleButtonChange}
        currentPage={currentPage}
        lastPage={lastPage}
      />
    </>
  );
};

export default ArtistContainer;
