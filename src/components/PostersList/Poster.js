/* eslint-disable no-bitwise */

import React from 'react';
import { string, number } from 'prop-types';
import { css } from 'glamor';
import { Link } from 'react-router-dom';
import './poster.scss';


const colorOne = css({
  fontSize: '9em',
  fontFamily: 'Roboto',
  ':hover': {
    color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
  },
});
const colorTwo = css({
  fontSize: '6em',
  fontFamily: 'Varela Round',
  ':hover': {
    color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
  },
});
const colorThree = css({
  fontSize: '4em',
  fontFamily: 'Spartan',
  ':hover': {
    color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
  },
});
const colorFour = css({
  fontSize: '2em',
  fontFamily: 'Abel',
  ':hover': {
    color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
  },
});
const colorFive = css({
  fontSize: '1em',
  fontFamily: 'Poppins',
  ':hover': {
    color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
  },
});
const colorSix = css({
  ':hover': {
    color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
  },
});

const Poster = ({ title, id }) => {
  const size = () => {
    if (title.length <= 5) {
      return <h3 {...colorOne} className="poster-little">{title}</h3>;
    } if (title.length > 5 && title.length <= 10) {
      return <h3 {...colorTwo} className="poster-middle">{title}</h3>;
    } if (title.length > 10 && title.length <= 15) {
      return <h3 {...colorThree} className="poster-middle2">{title}</h3>;
    } if (title.length > 15 && title.length <= 20) {
      return <h3 {...colorFour} className="poster-middle3">{title}</h3>;
    } if (title.length > 20 && title.length <= 40) {
      return <h3 {...colorFive} className="poster-middle4">{title}</h3>;
    }
    return <h3 {...colorSix} className="poster-big">{title}</h3>;
  };
  return <Link to={{ pathname: `/${id}` }}>{size()}</Link>;
};

export default Poster;

Poster.defaultProps = {
  title: 'title',
  id: number,

};

Poster.propTypes = {
  title: string,
  id: number,
};
