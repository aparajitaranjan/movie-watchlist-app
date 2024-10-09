// import React from 'react';
// import MovieCard from './MovieCard';
// import '../../styles/MovieGrid.css';
// const MovieGrid = ({
//   movies,
//   watchlist,
//   handleAddToWatchlist,
//   handleRemoveFromWatchlist,
// }) => {
//   return (
//     <div className="movie-grid">
//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.imdbID}
//           movie={movie}
//           isInWatchlist={watchlist.some((item) => item.imdbID === movie.imdbID)}
//           handleAddToWatchlist={handleAddToWatchlist}
//           handleRemoveFromWatchlist={handleRemoveFromWatchlist}
//         />
//       ))}
//     </div>
//   );
// };

// export default MovieGrid;

import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';
import '../../styles/MovieGrid.css';

const MovieGrid = ({
  movies,
  watchlist,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
}) => {
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="movie-carousel-container">
      <div className="movie-carousel">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          arrows={true}
        >
          {movies.length > 0 ? (
            movies.map((movie) => (
              <div key={movie.imdbID} className="movie-card-wrapper">
                <MovieCard
                  movie={movie}
                  isInWatchlist={watchlist.some(
                    (item) => item.imdbID === movie.imdbID
                  )}
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </div>
            ))
          ) : (
            <div>No Movies Available</div>
          )}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieGrid;
