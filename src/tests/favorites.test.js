import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Favorites from '../path/to/Favorites'; 

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Favorites Component', () => {
  it('renders with favorite items', () => {
    const dummyFavoriteItems = [
      { id: 1, name: 'Favorite 1' },
      { id: 2, name: 'Favorite 2' },
    ];

    useSelector.mockReturnValue({
      favoritesReducer: {
        currentFavorites: dummyFavoriteItems,
      },
    });

    const { getByText } = render(
      <Provider store={mockStore}>
        <Favorites />
      </Provider>
    );

    expect(getByText('Favorite 1')).toBeInTheDocument();
    expect(getByText('Favorite 2')).toBeInTheDocument();
  });

  it('renders with no favorite items', () => {
    useSelector.mockReturnValue({
      favoritesReducer: {
        currentFavorites: [],
      },
    });

    const { getByText } = render(
      <Provider store={mockStore}>
        <Favorites />
      </Provider>
    );

    expect(getByText('No favorite items')).toBeInTheDocument();
  });
});
