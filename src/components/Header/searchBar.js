import React, { useState } from 'react';
import './searchbar.scss';

const SearchBar = ({ onSearchClick }) => {
  const [text, setText] = useState([{
    value: '',
  }]);

  const handleChange = (e) => setText({ value: e.target.value });

  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={text.value}
        onClick={onSearchClick(text.value)}
      />
    </div>
  );
};

export default SearchBar;
