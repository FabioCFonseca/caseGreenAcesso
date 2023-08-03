import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const Logo = styled.img`
  max-width: 100px; /* Adjust the width as needed */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src={require('../../../logo.png').default} alt='Logo' />
    </HeaderContainer>
  );
};

export default Header;
