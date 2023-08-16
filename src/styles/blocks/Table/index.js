import React from 'react';
import styled from 'styled-components';

const StyledTableContainer = styled.div`
  width: 1020px; /* Set the container width */
  margin: 150px auto; /* Center the container */

`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #0C7D85;
  }

  &:nth-child(odd) {
    background-color: #407772;
  }

  color: white;
`;

const StyledTableHeader = styled.th`
  padding: 8px;
  border: 1px solid #ddd;
`;

const StyledTableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const StyledTableLink = styled.a`
  color: blue;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const CharacterDetails = ({ character }) => {
  return (
    <StyledTableContainer>
    <StyledTable>
      <tbody>
      <StyledTableRow>
          <StyledTableHeader>Image</StyledTableHeader>
          <StyledTableData>
            <img src={character.image} alt={character.name} width="100" />
          </StyledTableData>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableHeader>ID</StyledTableHeader>
          <StyledTableData>{character.id}</StyledTableData>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableHeader>Name</StyledTableHeader>
          <StyledTableData>{character.name}</StyledTableData>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableHeader>Status</StyledTableHeader>
          <StyledTableData>{character.status}</StyledTableData>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableHeader>Species</StyledTableHeader>
          <StyledTableData>{character.species}</StyledTableData>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableHeader>Gender</StyledTableHeader>
          <StyledTableData>{character.gender}</StyledTableData>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableHeader>Origin</StyledTableHeader>
          <StyledTableData>{character.origin.name}</StyledTableData>
        </StyledTableRow>
        <StyledTableRow>
          <StyledTableHeader>Location</StyledTableHeader>
          <StyledTableData>
            <StyledTableLink href={character.location.url} target="_blank" rel="noopener noreferrer">
              {character.location.name}
            </StyledTableLink>
          </StyledTableData>
        </StyledTableRow>
        
      </tbody>
    </StyledTable>
    </StyledTableContainer>
  );
};

export default CharacterDetails;
