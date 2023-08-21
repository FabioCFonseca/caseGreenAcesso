import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';


const ContainerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 1000;
  background-color: black;
`;

const Logo = styled.img`
  height: 70px;
  padding: 0 40px;
`;

const FavoritesButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 8px 8px;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  height: 25px;
`;

const ButtonsWrapper = styled.div`
  padding: 0 40px;
`;

const Navbar = () => {
  return (
    <ContainerWrapper>   
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <ButtonsWrapper>
        <FavoritesButton to="/favorites">Favorites</FavoritesButton>
      </ButtonsWrapper>
      </ContainerWrapper>

    
  );
};

export default Navbar;
