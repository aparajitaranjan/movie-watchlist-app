import React, { useState } from 'react';
import { fetchMovies } from '../../services/omdbApi';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../redux/actions/watchlistActions';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';
import '../../styles/MovieSearch.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.movies || []);
  const email = useSelector((state) => state.user.email);
  console.log('watchlist---------', watchlist);
  const handleSearch = async () => {
    setHasSearched(true);
    setLoading(true);
    console.log('searchTerm----', searchTerm);
    if (searchTerm) {
      const results = await fetchMovies(searchTerm);
      setMovies(results || []);
    }
    setLoading(false);
  };

  const handleAddToWatchlist = (movie) => {
    dispatch(addToWatchlist(movie));
  };

  const handleRemoveFromWatchlist = (movie) => {
    dispatch(removeFromWatchlist(movie));
  };

  return (
    <div className="movie-search-container">
      {email ? (
        <div>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSearch={handleSearch}
          />

          {hasSearched && loading ? (
            <h2>Loading...</h2>
          ) : hasSearched && movies.length > 0 ? (
            <div>
              <h2>Search Results for "{searchTerm}"</h2>
              <MovieGrid
                movies={movies}
                watchlist={watchlist}
                handleAddToWatchlist={handleAddToWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            </div>
          ) : hasSearched && !loading ? (
            <h2>Data not found</h2>
          ) : null}

          <h2>My Watchlist</h2>
          {watchlist.length > 0 ? (
            <MovieGrid
              movies={watchlist}
              watchlist={watchlist}
              handleAddToWatchlist={handleAddToWatchlist}
              handleRemoveFromWatchlist={handleRemoveFromWatchlist}
            />
          ) : (
            <p>Your watchlist is empty.</p>
          )}
        </div>
      ) : (
        <p>Please log in to view and manage your watchlist.</p>
      )}
    </div>
  );
};

export default MovieSearch;
