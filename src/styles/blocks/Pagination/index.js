import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 32px;
`;

const ListItem = styled.li`
  list-style: none;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 3px;
  background-color: ${props => props.current ? 'red' : '#f0f0f0'};

  &:hover {
    background-color: grey;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #f0f0f0;
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
  const itensPerPage = 6;
  const totalPages = Math.ceil(data.length / itensPerPage);

  const createPageButton = (label, page) => (
    <Button key={label} onClick={() => handlePageChange(page)}>
      {label}
    </Button>
  );

  const paginationBar = () => {
    const pages = [];
    const pages2 = [
      createPageButton('First', 1),
      createPageButton('Previous', currentPage - 1),
      createPageButton('Next', currentPage + 1),
      createPageButton('Last', totalPages),
    ];

    const handlePageClick = (i) => {
      handlePageChange(i);
    };

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <ListItem key={i}>
          <PageButton current={currentPage === i} onClick={() => handlePageClick(i)}>{i}</PageButton>
        </ListItem>
      );
    }

    const displayRange = 2;
    const startIndex = Math.max(0, currentPage - displayRange - 1);
    const endIndex = Math.min(pages.length - 1, currentPage + displayRange - 1);

    const pages3 = pages.slice(startIndex, endIndex + 1);

    pages2.splice(2, 0, ...pages3);

    return pages2;
  };

  return <PaginationContainer>{paginationBar()}</PaginationContainer>;
};

export default Pagination;
