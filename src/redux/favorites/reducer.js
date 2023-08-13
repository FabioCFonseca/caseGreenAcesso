const initialState = {
  currentFavorites: [],
}


const favoritesReducer = (state = initialState, action) => {
  
  if (action.type === 'favorites/toggleFavorite') {
    const characterObject = action.payload.characterObject;
    
    if(!state.currentFavorites.some(item => item.id === characterObject.id)){
      
      return { ...state, currentFavorites: [...state.currentFavorites, characterObject] };
    } else{
      
      return {
        ...state,
        currentFavorites: state.currentFavorites.filter(item => item.id !== characterObject.id),
      };
    }
  }
  
  
  return state;
  
}

export default favoritesReducer;
