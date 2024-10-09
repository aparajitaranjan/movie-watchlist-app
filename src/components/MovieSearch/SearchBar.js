import React from 'react';
import '../../styles/SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Search for movies"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
