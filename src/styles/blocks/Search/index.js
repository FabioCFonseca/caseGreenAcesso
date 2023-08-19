import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchInputWrapper = styled.div`
  position: relative;
  width: inherit;

  @media (max-width: 480px) {
    padding: 0 20px;
  }
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 5px;
  background-color: #407772;
  color: lightgrey;
  border: none;
  width: 100%;
  padding: 3px 5px;
  outline: none; 
  
  ::placeholder {
    color: lightgrey;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 50%;
  right: 5px; 
  transform: translateY(-50%);
  color: lightgrey;
  pointer-events: none; 
`;

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
