const API_KEY = '5a8597d';

export const fetchMovies = async (title) => {
  const response = await fetch(
    `http://www.omdbapi.com/?s=${title}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
