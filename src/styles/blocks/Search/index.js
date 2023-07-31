import React from 'react';

const SearchInput = ({currentPage, onPageChange}) => {
  

  const handleIncrement = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <>
      <p>SEARCH</p>
      <button onClick={handleIncrement}>Increment Current Page</button>
      <p>Current Page: {currentPage}</p>
    </>
  );
};

export default SearchInput;
