import React from 'react';
import StyledTable from './styles/blocks/Table';
import { useCharacters } from './service/api';
import { useParams } from 'react-router-dom';
import CharacterDetails from './styles/blocks/Table'; 

const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCharacters();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Find the character with the specified ID
  const character = data.find((item) => item.id === parseInt(id));

  // Check if the character is found
  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div>
      <h1>Detalhes do personagem</h1>
      <CharacterDetails character={character} /> 
    </div>
  );
};

export default Details;
