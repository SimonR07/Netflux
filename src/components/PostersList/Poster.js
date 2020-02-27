import React from 'react';
import { string } from 'prop-types';

const Poster = ({ title }) => (
  <div className="poster">
    <h3>{title}</h3>
    {
    }
    {console.log(title.length)}
  </div>
);

export default Poster;

Poster.defaultProps = {
  title: 'title',
};

Poster.propTypes = {
  title: string,
};
