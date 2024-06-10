import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Поиск..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Найти</button>
    </div>
  );
};

export default SearchBar;
