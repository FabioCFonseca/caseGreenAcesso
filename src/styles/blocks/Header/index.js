import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';  
import logo from '../../../logo.png'

const PageCOntainer = styled.div`
  background-color: black;
  height: 100px;
`;

const HeaderContainer = styled.header`
  color: #fff;
  height: inherit;
  display: flex;  
  flex-direction: row;
  justify-content: space-between; 
  align-items: center;
  border: 2px solid white;
  margin: auto 75px;
`;

const Logo = styled.img`
  height: 70px; 
`;

const FavoritesButton = styled(Link)` 
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
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


const Header = () => {
  return (
    <PageCOntainer>
    <HeaderContainer>
      
      <Link to="/"> 
        <Logo src={logo} alt='Logo' />
      </Link>
      
      <FavoritesButton to='/favorites'>Favorites</FavoritesButton>
    </HeaderContainer>
    </PageCOntainer>
  );
};

export default Header;
