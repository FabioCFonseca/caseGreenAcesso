import React from 'react';
import { SearchInputWrapper, SearchInput, SearchIcon } from '../styled/Search.Styled';

const Search = ({ handlePageChange, handleSearch }) => {
  const handleSearchChange = (event) => {
    handleSearch(event.target.value);
    handlePageChange(1);
  };

  return (
    <SearchInputWrapper>
      <SearchInput
        type="text"
        placeholder="Find a character"
        onChange={handleSearchChange}
      />
      <SearchIcon />
    </SearchInputWrapper>
  );
};

export default Search;
