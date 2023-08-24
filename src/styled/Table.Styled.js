import styled from "styled-components";

export const TableWrapper = styled.div`
  margin: 0;
  width: 80%;
`;

export const StyledTable = styled.table`
  margin: 0;
  margin-bottom: 20px;
  width: 100%;
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #0C7D85;
  }

  &:nth-child(odd) {
    background-color: #407772;
  }

  width: 100%;
  color: white;
`;

export const StyledTableData = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  text-align: center;
`;

export const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 8px;
  margin: 0 auto 16px;
`;
