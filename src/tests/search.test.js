import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './Search';

// Mock the handleSearch and handlePageChange functions
const mockHandleSearch = jest.fn();
const mockHandlePageChange = jest.fn();

test('handleSearchChange is called with the correct input value', () => {
  // Render the Search component with mock functions
  const { getByPlaceholderText } = render(
    <Search handleSearch={mockHandleSearch} handlePageChange={mockHandlePageChange} />
  );

  // Get the input element by its placeholder text
  const inputElement = getByPlaceholderText('Find a character');

  // Simulate a change event with a test value
  fireEvent.change(inputElement, { target: { value: 'TestCharacter' } });

  // Assert that handleSearch was called with the test value
  expect(mockHandleSearch).toHaveBeenCalledWith('TestCharacter');

  // Assert that handlePageChange was called with the value 1
  expect(mockHandlePageChange).toHaveBeenCalledWith(1);
});

// You can add more test cases for edge cases, if applicable
