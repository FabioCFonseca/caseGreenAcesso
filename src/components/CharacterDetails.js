import React from 'react';
import {
  TableWrapper,
  StyledImage,
  StyledTable,
  StyledTableRow,
  StyledTableData,
} from '../styled/Table.Styled';

const CharacterDetails = ({ character }) => {
  return (
    <TableWrapper>
      <StyledImage src={character.image} alt={character.name} />
      <StyledTable>
        <tbody>
          <StyledTableRow>
            <StyledTableData>
              <h3>ID</h3>
            </StyledTableData>
            <StyledTableData>
              <p>{character.id}</p>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>
              <h3>Name</h3>
            </StyledTableData>
            <StyledTableData>
              <p>{character.name}</p>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>
              <h3>Status</h3>
            </StyledTableData>
            <StyledTableData>
              <p>{character.status}</p>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>
              <h3>Species</h3>
            </StyledTableData>
            <StyledTableData>
              <p>{character.species}</p>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>
              <h3>Gender</h3>
            </StyledTableData>
            <StyledTableData>
              <p>{character.gender}</p>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>
              <h3>Origin</h3>
            </StyledTableData>
            <StyledTableData>
              <p>{character.origin.name}</p>
            </StyledTableData>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableData>
              <h3>Location</h3>
            </StyledTableData>
            <StyledTableData>
              <p>{character.location.name}</p>
            </StyledTableData>
          </StyledTableRow>
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default CharacterDetails;
