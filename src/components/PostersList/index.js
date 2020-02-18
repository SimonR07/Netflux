import React from 'react';

import Poster from './Poster';
import './posterslist.scss';

const PostersList = ({ movies }) => (
  <div className="posterslist">
    {movies.map((movie) => (
      <Poster
        className="poster"
        key={movie.id}
        title={movie.title}
        image={movie.poster_path}
      />

    ))}
  </div>
);

export default PostersList;
