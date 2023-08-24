import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const SearchInput = styled.input`
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 5px;
  background-color: #407772;
  color: lightgrey;
  border: none;
  flex: 1; 
  padding: 3px 5px;
  outline: none; 
  
  ::placeholder {
    color: lightgrey;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  top: 50%;
  right: 10px; 
  transform: translateY(-50%);
  color: lightgrey;
  pointer-events: none; 
`;
