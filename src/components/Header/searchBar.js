import React, { useState } from 'react';
import './searchbar.scss';

import { func } from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={search}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            onSearch(search);
          }
        }}
      />
    </div>
  );
};

SearchBar.defaultProps = {
  onSearch: func,
};

SearchBar.propTypes = {
  onSearch: func,
};

export default SearchBar;
