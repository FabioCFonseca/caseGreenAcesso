import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 96px;
  margin-top: 100px;

  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 96px;
    margin-top: 80px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 96px; 
    margin-top: 80px;
  }
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  border: 3px solid #C0D16D;
  border-radius: 8px;
  position: relative;
  height: 200px;
  background-color: var(--secondaryBlue);
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: -75px;
  left: 50%;
  transform: translateX(-50%);
`;

const Button = styled(Link)`
  padding: 6px 10px;
  background-color: #324B4D;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  bottom: 0;
  left: 0; 
  position: absolute;
  margin: 0 10px;
  margin-bottom: 5px;
  text-decoration: none;

  &:hover {
    background-color: #C0D16D;
  }
`;

const HeartIcon = styled(AiFillHeart)`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: white; 
  font-size: 32px;

  &:hover {
    color: #C0D16D; 
  }
`;

const NoCharactersMessage = styled.div`
  grid-column: span 3;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  height: 200px;
`;

const ListTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px; 

  @media (max-width: 480px) {
    padding: 0px 40px;
  }
`;

const HorizontalLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
  margin-left: 10px;
`;

const Card = ({ paginatedData, pageReference }) => {
  const { currentFavorites } = useSelector(state => state.favoritesReducer)
  const dispatch = useDispatch()
  
  const handleFavorite = ( characterObject ) => {
    dispatch({
      type: 'favorites/toggleFavorite',
      payload: { characterObject }
    })
  }

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
            <h2>{item.name}</h2>
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
