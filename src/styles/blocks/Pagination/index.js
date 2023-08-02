import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 32px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: ${props => (props.current ? 'red' : '#f0f0f0')};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px;

  &:hover {
    background-color: grey;
  }
`;

const Pagination = ({ data, currentPage, handlePageChange }) => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayRange = 2;

  const startIndex = Math.max(0, currentPage - displayRange - 1);
  const endIndex = Math.min(totalPages - 1, currentPage + displayRange - 1);

  const pages = [];
  for (let i = startIndex; i <= endIndex; i++) {
    pages.push(
      <Button key={i} current={currentPage === i + 1} onClick={() => handlePageChange(i + 1)}>
        {i + 1}
      </Button>
    );
  }

  return (
    <PaginationContainer>
      <Button onClick={() => handlePageChange(1)}>First</Button>
      <Button onClick={() => handlePageChange(currentPage - 11)}> -10</Button>
      {pages}
      <Button onClick={() => handlePageChange(currentPage + 10)}>+10</Button>
      <Button onClick={() => handlePageChange(totalPages)}>Last</Button>
    </PaginationContainer>
  );
};

export default Pagination;
