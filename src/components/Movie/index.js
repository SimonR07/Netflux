import React from 'react';
// import { any } from 'prop-types';
import { Link } from 'react-router-dom';


const Movie = (props) => {
  const { title, overview } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{overview}</p>
    </div>
  );
};

// Movie.defaultProps = {
//   movies: any,
// };

// Movie.propTypes = {
//   movies: any,
// };

export default Movie;
