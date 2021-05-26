import React from 'react';

export default function Pagination({ onClick, currentPage, lastPage }) {
  return (
    <nav>
      <button
        onClick={onClick}
        value="previous"
        name="previous"
        disabled={currentPage <= 1}
      >
        previous
      </button>
      <h2> {currentPage} </h2>
      <button
        onClick={onClick}
        value="next"
        name="next"
        disabled={currentPage >= lastPage}
      >
        next
      </button>
    </nav>
  );
}
