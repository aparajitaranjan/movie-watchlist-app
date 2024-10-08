import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  SET_WATCHLIST_NAME,
} from '../actions/actionTypes';

const initialState = {
  movies: JSON.parse(localStorage.getItem('watchlist')) || [],
  watchlistName: localStorage.getItem('watchlistName') || 'My Watchlist', // Default name
};

const watchlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return { ...state, movies: [...state.movies, action.payload] };
    case REMOVE_FROM_WATCHLIST:
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.imdbID !== action.payload.imdbID
        ),
      };
    case SET_WATCHLIST_NAME:
      return { ...state, watchlistName: action.payload };
    default:
      return state;
  }
};

export default watchlistReducer;
