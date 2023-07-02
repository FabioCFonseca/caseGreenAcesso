import React from 'react';
import styled from 'styled-components';

const SearchInputContainer = styled.div`
  margin-bottom: 16px;
`;

const SearchInputField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const SearchInput = ({ value, onChange }) => {
    return (
      <SearchInputContainer>
        <SearchInputField
          type="text"
          placeholder="Search by name"
          value={value}
          onChange={onChange}
        />
      </SearchInputContainer>
    );
  };
  
  export default SearchInput;
  