import React, { useState } from 'react';
import { useCharacters } from './service/api';
import Cardi from './styles/blocks/Cardi';
import Pagination from './styles/blocks/Pagination';
import SearchInput from './styles/blocks/Search';

const Home = () => {
  const { data, isLoading, isError } = useCharacters(); //API Data
  const [currentPage, setCurrentPage] = useState(1)
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const itensPerPage = 9
  const startIndex = (currentPage - 1) * itensPerPage
  const endIndex = startIndex + itensPerPage
  const paginatedData = data.slice(startIndex, endIndex) 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <SearchInput
      currentPage={currentPage}
      onPageChange={handlePageChange}
      />
      <Cardi.Grid>
        {paginatedData.map((item) => (
             <Cardi key={item.id}>
               <Cardi.Image src={item.image}/> 
               <Cardi.Title>{item.name}</Cardi.Title>
               <Cardi.Specs>{item.species}</Cardi.Specs>
               <Cardi.Specs>{item.status}</Cardi.Specs>
               <Cardi.Button to={`/details/${item.id}`}></Cardi.Button>
             </Cardi>
        ))}
      </Cardi.Grid>
      <Pagination
        data={data}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
