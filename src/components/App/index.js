// == Import : npm
import React from 'react';


import Home from 'src/components/Home';
// == Import : local
import './app.scss';
import dataMovies from 'src/data/movies';

// == Composant
const App = () => (
  <div id="app">
    <Home
      movies={dataMovies}
    />
  </div>
);

// == Export
export default App;
