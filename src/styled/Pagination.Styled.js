import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 32px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: ${props => (props.current ? '#F9F871' : '#f0f0f0')};
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 5px;

  &:hover {
    background-color: grey;
  }
`;
