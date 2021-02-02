import types from '../types';
const defaultState = { images: [], total: 0, totalPages: 0, loading: false };

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_REQUEST:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        images: [...state.images, ...action.payload.results],
        total: action.payload.total,
        totalPages: action.payload.total_pages,
        loading: false
      };
    case types.FETCH_ERROR:
      return {
        ...state,
        images: [],
        loading: false
      };
    case types.FETCH_FORMAT:
      return {
        ...state,
        images: []
      };
    default:
      return state;
  }
};
