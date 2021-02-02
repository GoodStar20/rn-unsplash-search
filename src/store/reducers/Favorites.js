import types from '../types';
const defaultState = { favorites: [] };

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case types.REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(element => element !== action.payload)
      };
    default:
      return state;
  }
};
