import React from 'react';
import Header from 'src/components/Header';
import PostersList from 'src/components/PostersList';
import LoadButton from '../PostersList/LoadButton';

import './home.scss';


const Home = ({
  movies, loading, badge, loadMore,
}) => {
  return (
    <>
      <Header
        badge={badge}
      />
      <PostersList
        movies={movies}
      />
      <LoadButton
        loading={loading}
        onClick={loadMore}
      />
    </>

  );
};

export default Home;
