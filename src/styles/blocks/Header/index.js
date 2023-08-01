import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Subtitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>My Awesome Website</Title>
      <Subtitle>Welcome to my website built with React and Styled Components</Subtitle>
    </HeaderContainer>
  );
};

export default Header;
