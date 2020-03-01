import React from 'react';

import { any } from 'prop-types';
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
        text={movie.overview}
      />
    ))}
  </div>
);

export default PostersList;

PostersList.defaultProps = {
  movies: any,
};

PostersList.propTypes = {
  movies: any,
};
