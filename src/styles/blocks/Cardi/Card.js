import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
  border: 2px solid #ccc;
  position: relative;
  height: 200px;
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
`;

const Button = styled(Link)`
  padding: 8px 16px;
  background-color: #800080;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  bottom: 0;
  left: 0; /* Align the button to the left */
  position: absolute;
  margin: 0 10px;
  margin-bottom: 5px;

  &:hover {
    background-color: #600060;
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
        </CardBody>
      ))}
    </CardContainer>
  );
};

export default Card;
