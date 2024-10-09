import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from './actionTypes';

export const addToWatchlist = (movie) => {
  const userEmail = localStorage.getItem('userEmail');
  if (!userEmail) return;

  const userWatchlistKey = `watchlist_${userEmail}`;
  const updatedWatchlist =
    JSON.parse(localStorage.getItem(userWatchlistKey)) || [];
  updatedWatchlist.push(movie);
  localStorage.setItem(userWatchlistKey, JSON.stringify(updatedWatchlist));

  return {
    type: ADD_TO_WATCHLIST,
    payload: movie,
  };
};

export const removeFromWatchlist = (movie) => {
  const userEmail = localStorage.getItem('userEmail');
  if (!userEmail) return;
  const userWatchlistKey = `watchlist_${userEmail}`;
  const updatedWatchlist =
    JSON.parse(localStorage.getItem(userWatchlistKey)) || [];
  const newWatchlist = updatedWatchlist.filter(
    (item) => item.imdbID !== movie.imdbID
  );
  localStorage.setItem(userWatchlistKey, JSON.stringify(newWatchlist));

  return {
    type: REMOVE_FROM_WATCHLIST,
    payload: movie,
  };
};
