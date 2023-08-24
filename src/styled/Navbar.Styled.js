import styled from 'styled-components';

export const ContainerWrapper = styled.div`
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

export const Logo = styled.img`
  height: 70px;
  padding: 0 40px;
`;

export const FavoritesButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent; 
  color: #fff; 
  padding: 8px 8px;
  border: 2px solid #fff; 
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  height: 25px;
  transition: background-color 0.3s ease, color 0.3s ease; 

  &:hover {
    background-color: #fff; 
    color: #000; 
  }
`;

export const ButtonsWrapper = styled.div`
  padding: 0 40px;
`;
