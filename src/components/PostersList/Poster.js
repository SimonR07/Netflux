/* eslint-disable no-unused-expressions */
import React from 'react';
import { string } from 'prop-types';
import { css } from 'glamor';

import './poster.scss';

const styles = css({
  ':hover': {
    color: 'pink',
  },
});

const Poster = ({ title }) => {
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

export default Poster;

Poster.defaultProps = {
  title: 'title',
};

Poster.propTypes = {
  title: string,
};
