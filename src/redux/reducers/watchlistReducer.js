import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  SET_USER,
  LOG_OUT,
} from '../actions/actionTypes';

const initialState = {
  movies: [],
  watchlistName: localStorage.getItem('watchlistName') || 'My Watchlist',
};

const loadWatchlist = (email) => {
  const userWatchlistKey = `watchlist_${email}`;
  return JSON.parse(localStorage.getItem(userWatchlistKey)) || [];
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
    case SET_USER:
      return { ...state, movies: loadWatchlist(action.payload) };
    case LOG_OUT:
      return { ...state, movies: [] };
    default:
      return state;
  }
};
export default watchlistReducer;
