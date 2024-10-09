import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/omdbApi';
import '../../styles/MovieDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(id);
        setMovie(data);
        setLoading(false);
      } catch (err) {
        setError('Unable to fetch movie details');
        setLoading(false);
      }
    };

    getMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="movie-detail-loading">
        <div className="skeleton-poster"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
      </div>
    );
  }

  if (error) {
    return <div className="movie-detail-error">{error}</div>;
  }

  if (!movie) {
    return <div className="movie-detail-no-data">Movie details not found</div>;
  }

  return (
    <div className="movie-detail-container">
      <div className="movie-detail">
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/300x450'
          }
          alt={movie.Title}
          className="movie-detail-poster"
        />
        <div className="movie-detail-info">
          <h2>{movie.Title}</h2>
          <p>
            <strong>Year:</strong> {movie.Year}
          </p>
          <p>
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p>
            <strong>Director:</strong> {movie.Director}
          </p>
          <p>
            <strong>Plot:</strong> {movie.Plot}
          </p>
          <div className="movie-rating">
            {' '}
            IMDB Rating:
            <span> {movie.imdbRating}</span>
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          {/* <p>
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
