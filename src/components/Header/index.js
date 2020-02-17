import React from 'react';
import './header.scss';

import logo from 'src/images/netflux-logo.svg';
import pop from 'src/images/pop-corn.svg';


const Header = () => (
  <div className="main-header">
    <div className="container">
      <img src={logo} className="logo" alt="logo" />
      <img src={pop} className="pop" alt="pop" />
    </div>
  </div>
);

export default Header;
