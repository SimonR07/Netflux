import React from 'react';
import './header.scss';
import { func } from 'prop-types';
import { Link } from 'react-router-dom';

import logo from 'src/images/netflux-logo.svg';
import pop from 'src/images/pop-corn.svg';
import { useSelector } from 'react-redux';
import SearchBar from './searchBar';


function Header({ onSearch }) {
  const basket = useSelector((previousState) => previousState.basket);
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <SearchBar onSearch={onSearch} />
      <p>popcorn: {basket}</p>
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
