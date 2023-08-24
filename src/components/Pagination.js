import React from 'react';
import { PaginationWrapper, Button } from '../styled/Pagination.Styled';

const Pagination = ({ data, currentPage, handlePageChange }) => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const displayRange = 1;

  const startIndex = Math.max(0, currentPage - displayRange - 1);
  const endIndex = Math.min(totalPages - 1, currentPage + displayRange - 1);

  const pages = [];
  for (let i = startIndex; i <= endIndex; i++) {
    pages.push(
      <Button
        key={i}
        current={currentPage === i + 1}
        onClick={() => handlePageChange(i + 1)}
      >
        {i + 1}
      </Button>
    );
  }

  return (
    <PaginationWrapper>
      <Button onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
        First
      </Button>
      <Button onClick={() => handlePageChange(Math.max(1, currentPage - 10))}>
        -10
      </Button>
      {pages}
      <Button onClick={() => handlePageChange(Math.min(totalPages, currentPage + 10))}>
        +10
      </Button>
      <Button onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
        Last
      </Button>
    </PaginationWrapper>
  );
};

export default Pagination;
