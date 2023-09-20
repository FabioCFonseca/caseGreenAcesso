import React from 'react';
import { render } from '@testing-library/react';
import Search from '../components/Search';

test('renders Search component', () => {
  const renderResult = render(
    <Search handlePageChange={() => {}} handleSearch={() => {}} />
  );

  const searchElement = renderResult.container;
  const inputElement = renderResult.getByPlaceholderText('Find a character');
  //const SearchIcon = renderResult.getByTestId('SearchIcon');

  expect(searchElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument(); 
  //expect(SearchIcon).toBeInTheDocument();
});
