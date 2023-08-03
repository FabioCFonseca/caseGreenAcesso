import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 128px;
  width: 1020px;
  margin: auto;
  margin-top: 102px;
`;

const CardBody = styled.div`
  /* Styles for the card body */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center contents both vertically and horizontally */
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
  font-family: 'Roboto', sans-serif; /* Use Roboto font */
  color: white; /* Set text color to white */
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
  left: 0; /* Align the button to the left */
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

// const HeartIconWrapper = styled.div`
// position: absolute;
// bottom: 1px;
// right: 10px;
// color: white; /* Adjust the color as needed */
// font-size: 30px;

// `;

const HeartIcon = styled(AiOutlineHeart)`
  position: absolute;
  bottom: 5px;
  right: 10px;
  color: white; /* Adjust the color as needed */
  font-size: 32px;

  /* Apply the hover effect to the outline */
  &:hover {
    color: #C0D16D; /* Change color on hover */
  }
`;

const Card = ({ paginatedData }) => {
  return (
    <CardContainer>
      {paginatedData.map((item) => (
        <CardBody key={item.id}>
          <Image src={item.image} />
          <Title>{item.name}</Title>
          <Button to={`/details/${item.id}`}>Details</Button>
          <HeartIcon />
        </CardBody>
      ))}
    </CardContainer>
  );
};

export default Card;
