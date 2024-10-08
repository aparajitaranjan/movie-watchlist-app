import React from 'react';
import { useSelector } from 'react-redux';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.movies);

  return (
    <div>
      <div className="movie-grid">
        {watchlist.length > 0 ? (
          watchlist.map((movie) => (
            <div className="movie-card" key={movie.imdbID}>
              <img
                src={
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://via.placeholder.com/300x450'
                }
                alt={movie.Title}
              />
              <h3>{movie.Title}</h3>
              <p>Year: {movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies in your watchlist. Start adding some!</p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
