// import React from 'react';
// import '../../styles/MovieCard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBookmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';

// const MovieCard = ({
//   movie,
//   isInWatchlist,
//   handleAddToWatchlist,
//   handleRemoveFromWatchlist,
// }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(`/movie/${movie.imdbID}`);
//   };
//   return (
//     <div className="movie-card">
//       <img
//         src={
//           movie.Poster !== 'N/A'
//             ? movie.Poster
//             : 'https://via.placeholder.com/300x450'
//         }
//         alt={movie.Title}
//         className="movie-image"
//       />
//       <div className="movie-info" onClick={handleCardClick}>
//         <h3 className="movie-title">{movie.Title}</h3>
//         <p className="movie-year">Year: {movie.Year}</p>
//       </div>
//       <button
//         className="watchlist-icon"
//         onClick={() =>
//           isInWatchlist
//             ? handleRemoveFromWatchlist(movie)
//             : handleAddToWatchlist(movie)
//         }
//       >
//         <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
//         {isInWatchlist ? (
//           <FontAwesomeIcon icon={faMinus} className="inner-icon" />
//         ) : (
//           <FontAwesomeIcon icon={faPlus} className="inner-icon" />
//         )}
//       </button>
//     </div>
//   );
// };

// export default MovieCard;
import React from 'react';
import '../../styles/MovieCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookmark,
  faPlus,
  faMinus,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({
  movie,
  isInWatchlist,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className="movie-card" onClick={handleCardClick}>
      <div className="image-container">
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/300x450'
          }
          alt={movie.Title}
          className="movie-image"
        />
        <div className="image-overlay" />
      </div>
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">Year: {movie.Year}</p>
      </div>
      <button
        className={`watchlist-icon ${isInWatchlist ? 'in-watchlist' : ''}`}
        onClick={(e) => {
          e.stopPropagation();
          isInWatchlist
            ? handleRemoveFromWatchlist(movie)
            : handleAddToWatchlist(movie);
        }}
      >
        <FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
        {isInWatchlist ? (
          <FontAwesomeIcon icon={faMinus} className="inner-icon" />
        ) : (
          <FontAwesomeIcon icon={faPlus} className="inner-icon" />
        )}
      </button>
    </div>
  );
};

export default MovieCard;
