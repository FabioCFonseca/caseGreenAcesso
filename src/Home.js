import React, { useState } from 'react';
import { useCharacters } from './service/api';
import Cardi from './styles/blocks/Cardi';

const Home = () => {
  const { data, isLoading, isError } = useCharacters();
  const itemsPerPage = 9; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the range of items to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <Cardi.Grid>
        {currentItems.map((item) => (
             <Cardi key={item.id}>
               <Cardi.Image src={item.image}/> 
               <Cardi.Title>{item.name}</Cardi.Title>
               <Cardi.Specs>{item.species}</Cardi.Specs>
               <Cardi.Specs>{item.status}</Cardi.Specs>
             </Cardi>
        ))}
      </Cardi.Grid>

      <div>
        {/* Render pagination buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
