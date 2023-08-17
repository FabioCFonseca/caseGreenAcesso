import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  width: inherit;
  margin: 50px auto;
`;

const StyledTable = styled.table`
  margin: 0 auto;
  width: 70%;
  border-collapse: collapse;
  border: 1px solid #ddd;
  border-radius: 8px;
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

const StyledTableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
`;

const StyledText = styled.span`
  color: blue;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 8px;
  margin: 0 auto 16px;
`;

const CharacterDetails = ({ character }) => {
  return (
    <TableWrapper>
      <StyledImage src={character.image} alt={character.name} />
      <StyledTable>
        <tbody>
          <StyledTableRow>
            <StyledTableData>ID</StyledTableData>
            <StyledTableData>{character.id}</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Name</StyledTableData>
            <StyledTableData>{character.name}</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Status</StyledTableData>
            <StyledTableData>{character.status}</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Species</StyledTableData>
            <StyledTableData>{character.species}</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Gender</StyledTableData>
            <StyledTableData>{character.gender}</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Origin</StyledTableData>
            <StyledTableData>{character.origin.name}</StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>Location</StyledTableData>
            <StyledTableData>{character.location.name}</StyledTableData>
          </StyledTableRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default CharacterDetails;
