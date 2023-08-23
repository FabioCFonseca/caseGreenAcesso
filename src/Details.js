import React from 'react';
import styled from 'styled-components';
import { useCharacters } from './service/api';
import { useParams } from 'react-router-dom';
import CharacterDetails from './styles/blocks/Table';

const CenteredWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  text-align: center;
`;

const Details = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useCharacters();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const character = data.find((item) => item.id === parseInt(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <CenteredWrapper>
        <h1>Character details</h1>
        <CharacterDetails character={character} />
    </CenteredWrapper>
  );
};

export default Details;
