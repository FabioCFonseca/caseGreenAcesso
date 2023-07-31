import React from 'react';

const Pagination = ({ data, currentPage, handlePageChange }) => {
  const itensPerPage = 9
  const totalPages = Math.ceil(data.length / itensPerPage)

  const createPageButton = (label, page) => (
    <button key={label} onClick={() => handlePageChange(page)}>
      {label}
    </button>
  );

  const paginationBar = () => {    
    const pages = []
    const pages2 = [
      createPageButton('First', 1),
      createPageButton('Previous', currentPage - 1),
      createPageButton('Next', currentPage + 1),
      createPageButton('Last', totalPages),
    ]

    const handlePageClick = (i) => {
      handlePageChange(i)
    }

    for (let i = 1; i <= totalPages; i++ ) {
       pages.push(
        <li key={i}><button onClick={() => handlePageClick(i)}>{i}</button>{i}</li>
       )
     }

  const displayRange = 3;
  const startIndex = Math.max(0, currentPage - displayRange - 1);
  const endIndex = Math.min(pages.length - 1, currentPage + displayRange - 1);

  const pages3 = pages.slice(startIndex, endIndex + 1);

  pages2.splice(2, 0, ...pages3) 

    return pages2
  }

  return (
      <div>{paginationBar()}</div> 
  );
};

export default Pagination;
