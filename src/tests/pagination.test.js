import React from 'react';
import { render } from '@testing-library/react';
import Pagination from '../components/Pagination';

test('renders Pagination component', () => {
  
  const data = []; 
  const currentPage = 1; 
  const handlePageChange = jest.fn(); 

  
  const { container } = render(
    <Pagination data={data} currentPage={currentPage} handlePageChange={handlePageChange} />
  );

  
  expect(container).toBeInTheDocument();
});
