import React, { useState } from 'react';
import { useCharacters } from './service/api';
import Pagination from './styles/blocks/Pagination';
import Card from './styles/blocks/Cardi/Card';

const Home = () => {
  const { data, isLoading, isError } = useCharacters()  
  const [currentPage, setCurrentPage] = useState(1)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const itensPerPage = 6
  const startIndex = (currentPage - 1) * itensPerPage
  const endIndex = startIndex + itensPerPage
  const paginatedData = data.slice(startIndex, endIndex) 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Card paginatedData={paginatedData} />
      <Pagination
        data={data}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
