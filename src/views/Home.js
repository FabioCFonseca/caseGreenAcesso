import React, { useState } from 'react';
import { useCharacters } from '../service/api';
import Pagination from '../components/Pagination';
import Card from '../components/Card';
import Search from '../components/Search';

const Home = () => {
  const { data, isLoading, isError } = useCharacters();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const pageReference = 'characters';

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const filteredData = data.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (newText) => {
    setSearchText(newText);
  };

  console.log(filteredData);

  return (
    <div>
      <Search
        handlePageChange={handlePageChange}
        handleSearch={handleSearch}
      />
      <Card
        paginatedData={paginatedData}
        pageReference={pageReference}
      />
      <Pagination
        data={data}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
