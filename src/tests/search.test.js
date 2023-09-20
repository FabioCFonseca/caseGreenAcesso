import React from 'react';
import { render } from '@testing-library/react';
import Search from '../components/Search';

test('renders Search component', () => {
  // Render the Search componentw
  const renderResult = render(
    <Search handlePageChange={() => {}} handleSearch={() => {}} />
  );

  // Find the Search input element by placeholder text
  const inputElement = renderResult.getByPlaceholderText('Find a character');

  // Assert that the elements are present in the document
  expect(inputElement).toBeInTheDocument();
});
