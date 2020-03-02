import React from 'react';
import PostersList from 'src/components/PostersList';
import { any, func, bool } from 'prop-types';
import LoadButton from '../PostersList/LoadButton';

import './home.scss';

const Home = ({
  movies, loading, loadMore,
}) => (
  <>
    <PostersList movies={movies} />
    <LoadButton loading={loading} onClick={loadMore} />
  </>
);


export default Home;

Home.defaultProps = {
  movies: any,
  loading: bool,
  badge: any,
  loadMore: func,
  onSearch: func,
};

Home.propTypes = {
  movies: any,
  loading: bool,
  badge: any,
  loadMore: func,
  onSearch: func,
};
