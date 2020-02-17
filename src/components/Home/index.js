import React from 'react';
import Header from 'src/components/Header';

import './home.scss';


const Home = ({ movies }) => (
  <>
    <Header />
    <div className="home">
      {movies.map((movie) => (
        <img
          className="posters"
          key={movie.id}
          src={movie.poster_path}
          alt="poster"
        />
      ))}
    </div>
  </>

);


export default Home;
