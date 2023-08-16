import React from 'react';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchContainer = styled.div`
  text-align: center;
  margin-top: 120px;
`;

const SearchInputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchInput = styled.input`
  padding: 8px 30px 8px 10px;
  font-size: 16px;
  border-radius: 5px;
  width: 1000px;
  background-color: #407772;
  color: lightgrey;
  border: none;
  
  ::placeholder {
    color: lightgrey;
  }
`;

const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 50%;
  right: 10px; /* Adjusted to be on the far right */
  transform: translateY(-50%);
  color: lightgrey;
`;

const Search = ({ handlePageChange, handleSearch }) => {
  const handleSearchChange = (event) => {
    handleSearch(event.target.value);
    handlePageChange(1);
  };

  return (
    <SearchContainer>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          placeholder="Find a character"
          onChange={handleSearchChange}
        />
        <SearchIcon />
      </SearchInputWrapper>
    </SearchContainer>
  );
};

export default Search;
