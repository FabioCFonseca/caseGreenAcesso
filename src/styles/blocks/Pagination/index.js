import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 16px;
  margin-right: 4px;
  background-color: ${props => (props.active ? '#007bff' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#000')};
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: ${props => (props.disabled ? '#fff' : '#e9ecef')};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

const PaginationContainer = styled.div`
  margin-top: 16px;
`;

const Pagination = ({ totalPages, currentPage, onPageChange }) => {

  return (
    <PaginationContainer>
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          active={currentPage === index + 1}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </Button>
      ))}
    </PaginationContainer>
  );
};

export default Pagination;
