import {
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  SET_WATCHLIST_NAME,
} from './actionTypes';

// Action to set the watchlist name
export const setWatchlistName = (name) => {
  localStorage.setItem('watchlistName', name); // Save name to localStorage
  return {
    type: SET_WATCHLIST_NAME,
    payload: name,
  };
};

// Action to add a movie to the watchlist
export const addToWatchlist = (movie) => {
  // Update localStorage
  const updatedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  updatedWatchlist.push(movie);
  localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));

  return {
    type: ADD_TO_WATCHLIST,
    payload: movie,
  };
};

// Action to remove a movie from the watchlist
export const removeFromWatchlist = (movie) => {
  // Update localStorage
  const updatedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
  const newWatchlist = updatedWatchlist.filter(
    (item) => item.imdbID !== movie.imdbID
  );
  localStorage.setItem('watchlist', JSON.stringify(newWatchlist));

  return {
    type: REMOVE_FROM_WATCHLIST,
    payload: movie,
  };
};
