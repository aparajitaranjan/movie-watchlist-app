import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/omdbApi';
import '../../styles/MovieDetail.css';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
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
    return <div className="movie-detail-loading">Loading...</div>;
  }

  if (error) {
    return <div className="movie-detail-error">{error}</div>;
  }

  if (!movie) {
    return <div className="movie-detail-no-data">Movie details not found</div>;
  }

  return (
    <div className="movie-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
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
          <p>
            <strong>IMDB Rating:</strong> {movie.imdbRating}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
