// == Import : npm
import React from 'react';


import Home from 'src/components/Home';
// == Import : local
import './app.scss';
import dataMovies from 'src/data/movies';

// == Composant
class App extends React.Component {
  state={
    loading: false,
    movies: dataMovies,
    badge: null,
    activePage: null,
    totalPage: null,
    searchText: '',
  }

  render() {
    return (
      <div id="app">
        <Home
          {...this.state}
        />
      </div>
    );
  }
}

// == Export
export default App;
