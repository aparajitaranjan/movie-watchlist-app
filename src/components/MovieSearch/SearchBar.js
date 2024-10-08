import React from 'react';
import '../../styles/SearchBar.css'; // Import the CSS file

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
