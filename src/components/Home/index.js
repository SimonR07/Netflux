import React from 'react';
import Header from 'src/components/Header';


const Home = (movies) => (
  <>
    <Header />
    {movies.map((movie) => (
      <p>{movie.title}</p>
    ))};
  </>

);

export default Home;
