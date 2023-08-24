import React from 'react';
import { NoCharactersMessage, ListTitle, HorizontalLine, CardWrapper, CardBody, Image, NameText, Button, HeartIcon } from '../styled/Card.Styled';
import { useSelector, useDispatch } from 'react-redux';

const Card = ({ paginatedData, pageReference }) => {
  const { currentFavorites } = useSelector(state => state.favoritesReducer);
  const dispatch = useDispatch();
  
  const handleFavorite = (characterObject) => {
    dispatch({
      type: 'favorites/toggleFavorite',
      payload: { characterObject }
    });
  };

  if (paginatedData.length === 0) {
    return <NoCharactersMessage><h3>No characters found</h3></NoCharactersMessage>;
  }

  return (
    <>
      <ListTitle>
        <h1>List of {pageReference}</h1>
        <HorizontalLine />
      </ListTitle>
      <CardWrapper>
        {paginatedData.map((item) => (
          <CardBody key={item.id}>
            <Image src={item.image} />
            <NameText>{item.name}</NameText>
            <Button to={`/details/${item.id}`}>Details</Button>
            <HeartIcon
              onClick={() => handleFavorite(item)}
              style={{
                color: currentFavorites.some(favoriteItem => favoriteItem.id === item.id) ? '#C0D16D' : 'white'
              }}
            />
          </CardBody>
        ))}
      </CardWrapper>
    </>
  );
};

export default Card;
