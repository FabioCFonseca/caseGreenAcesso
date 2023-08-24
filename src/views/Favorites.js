import Card from '../components/Card';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favoriteItems = useSelector(state => state.favoritesReducer.currentFavorites);
  const pageReference = 'favorites characters'

  return (
    <div>
      <Card 
      paginatedData={favoriteItems}
      pageReference={pageReference}
/>
    </div>
  )
}

export default Favorites
