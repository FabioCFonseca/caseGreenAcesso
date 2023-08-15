import React from 'react'
import Card from './styles/blocks/Card/Card';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favoriteItems = useSelector(state => state.favoritesReducer.currentFavorites);

  return (
    <div>
      <h1>Favorites</h1>
      <Card paginatedData={favoriteItems} />
    </div>
  )
}

export default Favorites
