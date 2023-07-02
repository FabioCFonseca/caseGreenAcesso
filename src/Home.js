import React, { useState } from 'react';
import { useCharacters } from './service/api';
import Cardi from './styles/blocks/Cardi';
import Pagination from './styles/blocks/Pagination';
import SearchInput from './styles/blocks/Search';

const Home = () => {
  const { data, isLoading, isError } = useCharacters(); //API Data
  const [currentPage, setCurrentPage] = useState(1); // State da página atual
  const [searchQuery, setSearchQuery] = useState(''); // State da barra de pesquisa
  const itemsPerPage = 9

  console.log('home' + data)

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  //Set o state da barra de busca e set a página inicial para 1 para mostrar os resultados na primeira página
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

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

  return (
    <div>
      <SearchInput value={searchQuery} onChange={handleSearch} />
      <Cardi.Grid>
        {currentItems.map((item) => (
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
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Home;
