import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

import logo from 'src/images/netflux-logo.svg';
import pop from 'src/images/pop-corn.svg';
import SearchBar from './searchBar';


const Header = ({ onSearch }) => (
  <div className="header">
    <Link to="/">
      <img src={logo} className="logo" alt="logo" />
    </Link>
    <SearchBar onSearch={onSearch} />
    <img src={pop} className="pop" alt="pop" />
  </div>
);

export default Header;
