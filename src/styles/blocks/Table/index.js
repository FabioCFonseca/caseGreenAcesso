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
            <StyledTableData><h3>ID</h3></StyledTableData>
            <StyledTableData><p>{character.id}</p></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><h3>Name</h3></StyledTableData>
            <StyledTableData><p>{character.name}</p></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><h3>Status</h3></StyledTableData>
            <StyledTableData><p>{character.status}</p></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><h3>Species</h3></StyledTableData>
            <StyledTableData><p>{character.species}</p></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><h3>Gender</h3></StyledTableData>
            <StyledTableData><p>{character.gender}</p></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><h3>Origin</h3></StyledTableData>
            <StyledTableData><p>{character.origin.name}</p></StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData><h3>Location</h3></StyledTableData>
            <StyledTableData><p>{character.location.name}</p></StyledTableData>
          </StyledTableRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default CharacterDetails;
