import { combineReducers } from 'redux';
import Images from './Images';
import Favorites from './Favorites';

const rootReducers = combineReducers({
  images: Images,
  favorites: Favorites
});

export default rootReducers;
