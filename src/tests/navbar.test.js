import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import { BrowserRouter as Router } from 'react-router-dom'; 

import Navbar from './Navbar';

test('Navbar renders correctly', () => {
  const { getByAltText, getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  const logo = getByAltText('Logo');
  const favoritesButton = getByText('Favorites');

  expect(logo).toBeInTheDocument();
  expect(favoritesButton).toBeInTheDocument();
});
