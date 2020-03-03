/* eslint-disable no-unused-expressions */
import React from 'react';
import { string, number } from 'prop-types';
import { css } from 'glamor';
import { Link } from 'react-router-dom';
import './poster.scss';

const styles = css({
  ':hover': {
    color: 'pink',
  },
});

const Poster = ({ title, id }) => {
  const size = () => {
    if (title.length <= 5) {
      return <h3 {...styles} className="poster-little">{title}</h3>;
    } if (title.length > 5 && title.length <= 10) {
      return <h3 className="poster-middle">{title}</h3>;
    } if (title.length > 10 && title.length <= 15) {
      return <h3 className="poster-middle2">{title}</h3>;
    } if (title.length > 15 && title.length <= 20) {
      return <h3 className="poster-middle3">{title}</h3>;
    }
    return <h3 className="poster-big">{title}</h3>;
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
