import React from 'react';
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


export default Movie;
