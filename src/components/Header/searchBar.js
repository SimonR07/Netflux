import React, { useState } from 'react';
import './searchbar.scss';
import axios from 'axios';


const API_END_POINT = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=5dd8930949e7c1cc9ceda25ad6ac8de5';
const SEARCH_URL = 'search/movie?language=en&include_adult=false';

const SearchBar = () => {
  const [search, setSearch] = useState('');

  // const searchMovies = () => {
  //   const url = `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${search}`;
  //   return axios.get(url);
  // };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (value) => {
    const url = `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${search}`;
    console.log('handleSearch :', value, url);
  };

  // const handleSearch = value => {
  //   // lancer la recherche ici
  //   try {
  //     setSearch({ loading: true, searchText: value, image: null }, async () => {
  //       const { data : { results, page, total_pages }} = await searchMovie();
  //       console.log('res', results);
  //       setSearch({
  //         movies: results,
  //         loading: false,
  //       })
  //     })
  //   } catch(e) {
  //     console.log('e', e);
  //   }
  //   console.log('handleSearch', value);
  // }

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
            handleSearch(search);
          }
        }}
      />
    </div>
  );
};

export default SearchBar;
