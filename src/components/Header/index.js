import React from 'react';
import './header.scss';

import logo from 'src/images/netflux-logo.svg';
import pop from 'src/images/pop-corn.svg';
import SearchBar from './searchBar';


const Header = () => (
  <div className="header">
    <img src={logo} className="logo" alt="logo" />
    <SearchBar />
    <img src={pop} className="pop" alt="pop" />
  </div>
);

export default Header;
