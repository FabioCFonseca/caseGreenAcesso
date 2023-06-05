import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  width: 150px;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const CardName = styled.h3`
  margin-top: 12px;
`;

const FavoriteButton = styled.button`
  margin-top: 8px;
  padding: 8px;
  background-color: ${(props) => (props.isFavorited ? 'yellow' : 'transparent')};
  border: 1px solid ${(props) => (props.isFavorited ? 'yellow' : '#ccc')};
  border-radius: 4px;
  cursor: pointer;
`;

const Card = ({ name, image, inGrid }) => {
  const handleFavorite = () => {
    // Logic for handling the favorite button click
    console.log('Card favorited!');
  };

  return (
    <CardContainer inGrid={inGrid}>
      <CardImage src={image} alt={name} />
      <CardName>{name}</CardName>
      <FavoriteButton onClick={handleFavorite} isFavorited={false}>
        Favorite
      </FavoriteButton>
    </CardContainer>
  );
};

export default Card;
