import React from 'react';
import Header from 'src/components/Header';
import PostersList from 'src/components/PostersList';
import LoadButton from '../PostersList/LoadButton';

import './home.scss';


const Home = ({ movies }) => (
  <>
    <Header />
    <PostersList
      movies={movies}
    />
    <LoadButton />
  </>

);


export default Home;
