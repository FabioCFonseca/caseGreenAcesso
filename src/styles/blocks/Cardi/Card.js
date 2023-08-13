import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import rootReducer from '../../../redux/rootReducer';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 128px;
  width: 1020px;
  margin: auto;
  margin-top: 102px;
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
  background-color:#0C7D85;
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

const Title = styled.h2`
  font-size: 20px;
  margin: 8px 0;
  font-family: 'Roboto', sans-serif; 
  color: white; 
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
  font-family: 'Roboto', sans-serif;
  color: white;
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


const Card = ({ paginatedData }) => {
  const { currentFavorites } = useSelector(state => state.favoritesReducer)
  const dispatch = useDispatch()
  console.log(currentFavorites)
  

  const handleFavorite = ( characterObject ) => {
    
    dispatch({
      type: 'favorites/toggleFavorite',
      payload: { characterObject }
    })
  }

  return (
    <CardContainer>
      {paginatedData.map((item) => (
        <CardBody key={item.id}>
          <Image src={item.image} />
          <Title>{item.name}</Title>
          <Button to={`/details/${item.id}`}>Details</Button>
          <HeartIcon
           onClick={() => handleFavorite(item)}
           style={{
            color: currentFavorites.some(favoriteItem => favoriteItem.id === item.id) ? '#C0D16D' : 'white'
  }}
/>
        </CardBody>
      ))}
    </CardContainer>
  );
};

export default Card;
