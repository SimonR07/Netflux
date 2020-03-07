import React from 'react';
import './header.scss';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

import logo from 'src/images/netflux-logo.svg';
import pop from 'src/images/pop-corn.svg';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket, isLogged } from '../Basket/actions';
import SearchBar from './searchBar';


function Header({ onSearch }) {
  const basket = useSelector((previousState) => previousState.basket);
  const log = useSelector((state) => state.log);
  const dispatch = useDispatch();

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <SearchBar onSearch={onSearch} />
      <button onClick={() => dispatch(addToBasket())} type="button">plus</button>
      <button onClick={() => dispatch(removeFromBasket())} type="button">moins</button>
      <button onClick={() => dispatch(isLogged())} type="button">Sign in/Sign out</button>

      <p>popcorn: {basket}</p>
      <p>{log}</p>
      <img src={pop} className="pop" alt="pop" />
    </div>
  );
}

export default Header;

Header.defaultProps = {
  onSearch: func,
};

Header.propTypes = {
  onSearch: func,
};
