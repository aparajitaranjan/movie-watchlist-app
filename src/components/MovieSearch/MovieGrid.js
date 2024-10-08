import React from 'react';
import MovieCard from './MovieCard';
import '../../styles/MovieGrid.css';
const MovieGrid = ({
  movies,
  watchlist,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
}) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isInWatchlist={watchlist.some((item) => item.imdbID === movie.imdbID)}
          handleAddToWatchlist={handleAddToWatchlist}
          handleRemoveFromWatchlist={handleRemoveFromWatchlist}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
