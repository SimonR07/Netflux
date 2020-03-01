/* eslint-disable no-bitwise */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { string } from 'prop-types';

import './poster.scss';

const Poster = ({ title }) => {
  if (title.length <= 5) {
    return (
      <h3
        className="poster-little"
        style={{
          fontSize: '8em',
          fontFamily: 'Roboto',
          color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
        }}
      >{title}
      </h3>

    );
  } if (title.length > 5 && title.length <= 10) {
    return <div><h3 className="poster-middle" style={{ color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}` }}>{title}</h3></div>;
  } if (title.length > 10 && title.length <= 15) {
    return <div><h3 className="poster-middle2" style={{ color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}` }}>{title}</h3></div>;
  } if (title.length > 15 && title.length <= 20) {
    return <div><h3 className="poster-middle3" style={{ color: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}` }}>{title}</h3></div>;
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
