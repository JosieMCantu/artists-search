import React, { useState, useEffect } from 'react';
import AlbumList from '../components/artist/AlbumList';
import Pagination from '../components/pagination/Pagination';
import { useParams } from 'react-router-dom';
import { getAlbums } from '../services/apiUtils';
import Spinner from '../components/spinner/Spinner';

const ArtistContainer = () => {
  const { artistName, id } = useParams();
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10);

  useEffect(() => {
    getAlbums(id)
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
    <>
      <Spinner />
      <h1>Loading...</h1>
    </>
  ) : (
    <>
      <main>
        <section>
          <AlbumList
            albums={paginatedAlbums}
            artistId={id}
            artistName={artistName}
          />
        </section>
      </main>
      <footer>
        <Pagination
          onClick={handleButtonChange}
          currentPage={currentPage}
          lastPage={lastPage}
        />
      </footer>
    </>
  );
};

export default ArtistContainer;
