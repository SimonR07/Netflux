// == Import : npm
import React from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Movie from 'src/components/Movie';
import NotFound from 'src/components/NotFound';
import store from './store';
// == Import : local
import './app.scss';
// import dataMovies from 'src/data/movies';


const API_END_POINT = 'https://api.themoviedb.org/3/';
const POPULAR_MOVIES_URL = 'discover/movie?language=en&sort_by=popularity.desc&include_adult=true';
const API_KEY = 'api_key=5dd8930949e7c1cc9ceda25ad6ac8de5';
const SEARCH_URL = 'search/movie?language=en&include_adult=false';


// == Composant
class App extends React.Component {
  state = {
    loading: true,
    movies: [],
    badge: null,
    activePage: null,
    totalPage: null,
    searchText: '',
  }

  async componentDidMount() {

    try {
      const { data: { results, page, total_pages } } = await this.loadMovies();
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


  searchMovie = () => {
    const { searchText } = this.state;
    const url = `${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`;
    return axios.get(url);
    // console.log('searchText :', searchText, url);
  };

  handleSearch = (value) => {
    console.log('handelsearch:', value);
    try {
      this.setState({ loading: true, searchText: value }, async () => {
        const { data: { results, total_pages } } = await this.searchMovie();
        console.log('ressearch', results);
        this.setState({
          movies: results,
          loading: false,
        });
      });
    }
    catch (e) {
      console.log('e', e);
    }
    console.log('handleSearch', value);
  }

  loadMore = async () => {
    try {
      this.setState({ loading: true });
      const { data: { results, page, total_pages } } = await this.loadMovies();
      console.log('res', results);
      this.setState({
        movies: [...this.state.movies, ...results],
        loading: false,
        activePage: page,
        totalPages: total_pages,
      });
    }
    catch (e) {
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
    const { badge } = this.state;
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div id="app">
            <Header onSearch={this.handleSearch} badge={badge} />
            <Switch>
              <Route exact path="/">
                <Home
                  loadMore={this.loadMore}
                  {...this.state}
                />
              </Route>
              <Route exact path="/:id" component={Movie} />
              <Route component={NotFound} />
            </Switch>
          </div>

        </Provider>
      </BrowserRouter>
    );

  }
}

// == Export
export default App;
