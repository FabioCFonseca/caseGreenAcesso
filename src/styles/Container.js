import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  width: 1020px; 
  margin: 130px auto 0;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
