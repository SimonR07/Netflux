// == Import : npm
import React from 'react';
import axios from 'axios';


import Home from 'src/components/Home';
// == Import : local
import './app.scss';
// import dataMovies from 'src/data/movies';


const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = 'discover/movie?language=en&sort_by=popularity.desc&include_adult=true';
const API_KEY = 'api_key=5dd8930949e7c1cc9ceda25ad6ac8de5';
// const SEARCH_URL = 'search/movie?language=en&include_adult=false';


// == Composant
class App extends React.Component {
  state={
    loading: false,
    movies: [],
    badge: null,
    activePage: null,
    totalPage: null,
  }

  async componentDidMount() {
    try {
      const { data : { results, page, total_pages } } = await this.loadMovies();
      console.log('res', results);
      this.setState({
        movies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
      });
    }
    catch (e) {
      console.log('e', e);
    }
  }

  loadMore = async () => {

    try {
      this.setState({ loading: true });
      const { data : { results, page, total_pages } } = await this.loadMovies();
      console.log('res', results);
      this.setState({
        movies: [...this.state.movies, ...results],
        loading: false,
        activePage: page,
        totalPages: total_pages,
      });
    }
    catch(e) {
      console.log('error load more', e);
    }
    console.log('load more');
  }

  loadMovies = () => {
    const page = this.state.activePage + 1;
    const url = `${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}&page=${page}`;
    return axios.get(url);
  }

  render() {
    return (
      <div id="app">
        <Home
          loadMore={this.loadMore}
          {...this.state}
        />
      </div>
    );
  }
}

// == Export
export default App;
