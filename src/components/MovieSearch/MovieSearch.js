import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/omdbApi';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToWatchlist,
  removeFromWatchlist,
} from '../../redux/actions/watchlistActions';
import SearchBar from './SearchBar';
import MovieGrid from './MovieGrid';
import SliderControls from './SliderControls';
import '../../styles/MovieSearch.css';

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.movies || []);

  const email = useSelector((state) => state.user.email);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const [currentWatchlistIndex, setCurrentWatchlistIndex] = useState(0);
  const [moviesPerPage, setMoviesPerPage] = useState(3);

  useEffect(() => {
    const updateMoviesPerPage = () => {
      if (window.innerWidth < 600) {
        setMoviesPerPage(2);
      } else if (window.innerWidth < 900) {
        setMoviesPerPage(3);
      } else if (window.innerWidth < 1500) {
        setMoviesPerPage(4);
      } else {
        setMoviesPerPage(6);
      }
    };

    updateMoviesPerPage();
    window.addEventListener('resize', updateMoviesPerPage);

    return () => {
      window.removeEventListener('resize', updateMoviesPerPage);
    };
  }, []);

  const handleSearch = async () => {
    setHasSearched(true);
    setLoading(true);
    if (searchTerm) {
      const results = await fetchMovies(searchTerm);
      setMovies(results || []);
      setCurrentSearchIndex(0);
    }
    setLoading(false);
  };
  const handleAddToWatchlist = (movie) => {
    dispatch(addToWatchlist(movie));
  };

  const handleRemoveFromWatchlist = (movie) => {
    dispatch(removeFromWatchlist(movie));
  };

  const handleSearchNext = () => {
    if (currentSearchIndex + moviesPerPage < movies.length) {
      setCurrentSearchIndex(currentSearchIndex + moviesPerPage);
    }
  };

  const handleSearchPrev = () => {
    if (currentSearchIndex - moviesPerPage >= 0) {
      setCurrentSearchIndex(currentSearchIndex - moviesPerPage);
    }
  };

  const handleWatchlistNext = () => {
    if (currentWatchlistIndex + moviesPerPage < watchlist.length) {
      setCurrentWatchlistIndex(currentWatchlistIndex + moviesPerPage);
    }
  };

  const handleWatchlistPrev = () => {
    if (currentWatchlistIndex - moviesPerPage >= 0) {
      setCurrentWatchlistIndex(currentWatchlistIndex - moviesPerPage);
    }
  };

  return (
    <div>
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
            <h2>Search Results for "{searchTerm}"</h2>
          ) : hasSearched && !loading ? (
            <h2>No Result</h2>
          ) : null}

          <SliderControls
            onPrev={handleSearchPrev}
            onNext={handleSearchNext}
            prevDisabled={currentSearchIndex === 0}
            nextDisabled={
              currentSearchIndex + moviesPerPage >= movies.length || 0
            }
          />

          <MovieGrid
            movies={movies.slice(
              currentSearchIndex,
              currentSearchIndex + moviesPerPage
            )}
            watchlist={watchlist}
            handleAddToWatchlist={handleAddToWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
          />

          <h2>Your Watchlist</h2>
          <SliderControls
            onPrev={handleWatchlistPrev}
            onNext={handleWatchlistNext}
            prevDisabled={currentWatchlistIndex === 0}
            nextDisabled={
              currentWatchlistIndex + moviesPerPage >= watchlist.length || 0
            }
          />

          <MovieGrid
            movies={watchlist.slice(
              currentWatchlistIndex,
              currentWatchlistIndex + moviesPerPage
            )}
            watchlist={watchlist}
            handleAddToWatchlist={handleAddToWatchlist}
            handleRemoveFromWatchlist={handleRemoveFromWatchlist}
          />
        </div>
      ) : (
        <p>Please login to view and manage your watchlist.</p>
      )}
    </div>
  );
};

export default MovieSearch;
