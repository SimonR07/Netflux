import React from 'react';
import Header from 'src/components/Header';
import PostersList from 'src/components/PostersList';

import './home.scss';


const Home = ({ movies }) => (
  <>
    <Header />
    <PostersList
      movies={movies}
    />
  </>

);


export default Home;
