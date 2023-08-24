import React from 'react';
import { ContainerWrapper, Logo, ButtonsWrapper, FavoritesButton } from '../styled/Navbar.Styled';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ContainerWrapper>   
      <Link to="/">
        <Logo src={logo} alt="Logo" />
      </Link>
      <ButtonsWrapper>
        <Link to="/favorites">
          <FavoritesButton>Favorites</FavoritesButton>
        </Link>
      </ButtonsWrapper>
    </ContainerWrapper>
  );
};

export default Navbar;
