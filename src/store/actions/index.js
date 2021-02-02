import axios from 'axios';
import types from '../types';

export const fetchRequest = (query, page) => async dispatch => {
  dispatch({ type: types.FETCH_REQUEST });
  if (page === 1) {
    dispatch({ type: types.FETCH_FORMAT });
  }
  const CLIENT_ID = 'vDbzWjUGorNfvg8dtTvEylDHTtMrkfW-vdxq07qkZW8';
  const url = `https://api.unsplash.com/search/photos/?query=${query}&page=${page}&client_id=${CLIENT_ID}`;
  const response = await axios.get(url);
  if (response.status === 200) {
    dispatch({ type: types.FETCH_SUCCESS, payload: response.data });
  } else {
    dispatch({ type: types.FETCH_ERROR });
  }
};
export const addFavorite = item => async dispatch => {
  dispatch({ type: types.ADD_FAVORITE, payload: item });
};
export const removeFavorite = item => async dispatch => {
  dispatch({ type: types.REMOVE_FAVORITE, payload: item });
};
