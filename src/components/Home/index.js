import React from 'react';
import Header from 'src/components/Header';
import PostersList from 'src/components/PostersList';
import LoadButton from '../PostersList/LoadButton';

import './home.scss';


const Home = ({
  movies,
  loading,
  badge,
  activePage,
  totalPage,
  searchText,
}) => {

  const handleSearch = value => {
    console.log('handleSearch :', value);
  };

  const loadMore = () => {
    console.log('loadMore :');

  }

  return (
    <>
      <Header
        badge={badge}
        onSearchClick={handleSearch}
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
