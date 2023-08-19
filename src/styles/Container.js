import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 1020px; 
  margin: 130px auto 0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 768px; 
    margin: 130px auto 0;
  }

  @media (max-width: 480px) {
    width: 480px; 
    margin: 130px auto 0;
  }
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
