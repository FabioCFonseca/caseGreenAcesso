import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
  border: 1px solid #800080;
  border-radius: 8px;
  padding: 16px;
  width: 150px;
  background: linear-gradient(45deg, rgba(77, 0, 123, 0.8), rgba(0, 123, 28, 0.8));
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CardName = styled.h3`
  margin-top: 12px;
`;

const CardSpecies = styled.p`
  margin-top: 8px;
`;

const CardStatus = styled.p`
  margin-top: 4px;
`;

const FavoriteButton = styled.button`
  margin-top: 8px;
  padding: 8px;
  background-color: ${(props) => (props.isFavorited ? 'yellow' : 'transparent')};
  border:  ${(props) => (props.isFavorited ? 'yellow' : '#ccc')};
  border-radius: 4px;
  cursor: pointer;
`;

const Card = ({ name, image, species, status, inGrid }) => {
  const handleFavorite = () => {
    // Logic for handling the favorite button click
    console.log('Card favorited!');
  };

  return (
    <CardContainer inGrid={inGrid}>
      <CardImage src={image} alt={name} />
      <CardName>{name}</CardName>
      <CardSpecies>Species: {species}</CardSpecies>
      <CardStatus>Status: {status}</CardStatus>
      <FavoriteButton onClick={handleFavorite} isFavorited={false}>
        <FontAwesomeIcon icon={faHeart} />
      </FavoriteButton>
    </CardContainer>
  );
};

export default Card;
