import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #800080;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #6a006a;
  }
`;

export const Button = ({ to }) => {
  return <StyledButton to={to}>More</StyledButton>;
};

 
