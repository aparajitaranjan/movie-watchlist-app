import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../styles/MyWatchlist.css';
import { fetchMovieDetails } from '../services/omdbApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Watchlist = () => {
  const watchlist = useSelector((state) => state.watchlist.movies);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await Promise.all(
        watchlist.map((movie) => fetchMovieDetails(movie.imdbID))
      );
      const detailsMap = details.reduce((acc, detail) => {
        acc[detail.imdbID] = detail;
        return acc;
      }, {});
      setMovieDetails(detailsMap);
    };

    if (watchlist.length > 0) {
      fetchDetails();
    }
  }, [watchlist]);

  return (
    <div className="watchlist-container1">
      <h2>My Watchlist</h2>
      {watchlist.length > 0 ? (
        watchlist.map((movie) => {
          const details = movieDetails[movie.imdbID];
          return (
            <div className="movie-card1" key={movie.imdbID}>
              <img
                src={
                  movie.Poster !== 'N/A'
                    ? movie.Poster
                    : 'https://via.placeholder.com/300x450'
                }
                alt={movie.Title}
                className="movie-image1"
              />
              <div className="movie-details1">
                <h3>{movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                {details && (
                  <>
                    <div className="movie-rating1">
                      <span>{details.imdbRating}</span>
                      <FontAwesomeIcon icon={faStar} className="star" />
                    </div>
                    <p>Genre: {details.Genre}</p>
                    <p>Director: {details.Director}</p>
                    <p>{details.Plot}</p>
                  </>
                )}
              </div>
            </div>
          );
        })
      ) : (
        <p>No movies in your watchlist. Start adding some!</p>
      )}
    </div>
  );
};

export default Watchlist;
